//@ts-nocheck
import { FastifyReply, FastifyRequest } from "fastify";
import { createUserInput, loginUserInput } from "../schemas/user.schema";
import { createUser, findUserByEmail } from "../services/user.service";
import bcrypt from "bcrypt";
import { signJWT, verifyJWT } from "../utils/access&refreshToken";
async function registerUserHandler(
  req: FastifyRequest<{ Body: createUserInput }>,
  replay: FastifyReply
) {
  const userInput = req.body;
  const salt = await bcrypt.genSalt(12);
  const hasedPassword = await bcrypt.hash(userInput.password, salt);
  const user = await createUser({ ...userInput, password: hasedPassword });
  const accessToken = signJWT({ ...user, password: "fuck you" }, "1y");
  const refreshToken = signJWT({ ...user, password: "fuck you" }, "1y");
  replay.cookie("jwt", refreshToken, {
    httpOnly: true,
    sameSite: "none",
    // secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  replay.code(201).send({ accessToken, id: user?.id });
}

async function loginUserHandler(
  req: FastifyRequest<{ Body: loginUserInput }>,
  replay: FastifyReply
) {
  try {
    const user = await findUserByEmail(req.body.email);
    if (!user) {
      replay.code(403).send("bad credentials");
    }

    const isValid = await bcrypt.compare(req.body.password, user?.password!);

    if (!isValid) {
      replay.code(403).send("bad credentials");
    }

    const accessToken = signJWT({ ...user, password: "fuck you" }, "1y");
    const refreshToken = signJWT({ ...user, password: "fuck you" }, "1y");

    replay.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "none",
      // secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    replay.code(201).send({ accessToken, id: user?.id! });
  } catch (error) {
    replay.send(error);
  }
}

async function refreshTokeHandler(req: FastifyRequest, reply: FastifyReply) {
  try {
    const token = req.cookies.jwt;
    console.log(token);
    console.log(token, "this is token");
    const { payload } = verifyJWT(token);
    const user = await findUserByEmail(payload?.email);
    const accessToken = signJWT({ ...user, password: "fuck you" }, "1y");

    reply.code(200).send({ accessToken, id: user?.id });
  } catch (error) {
    reply.send(error);
  }
}

async function logoutUserHandler() {
  //clear cookies
  //clear accesstoken
}

export { loginUserHandler, registerUserHandler, refreshTokeHandler };
