import { FastifyInstance, FastifyPluginOptions } from "fastify";
import {
  loginUserHandler,
  refreshTokeHandler,
  registerUserHandler,
} from "../controllers/auth.controllers";

export function authRoute(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.post("/register", registerUserHandler);
  app.post("/login", loginUserHandler);
  app.post("/refresh", refreshTokeHandler);
  done();
}
