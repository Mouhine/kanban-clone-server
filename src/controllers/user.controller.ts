import { FastifyReply, FastifyRequest } from "fastify";
import { createUserInput, loginUserInput } from "../schemas/user.schema";
import { createUser, findUserByEmail, getUser } from "../services/user.service";

export async function createUserHandler(
  req: FastifyRequest<{
    Body: createUserInput;
  }>,
  res: FastifyReply
) {
  try {
    const user = await createUser(req.body);
    if (!user) {
      return res.send("something is wrong try again later");
    }
    console.log(user);

    return res.send(user);
  } catch (error) {}
}

export async function getUserHandler(
  req: FastifyRequest<{ Params: { id: string } }>,
  res: FastifyReply
) {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await getUser(id);
    console.log(user);
    if (!user) {
      return res.code(403).send("invalid user");
    }

    res.code(200).send(user);
  } catch (error) {}
}
