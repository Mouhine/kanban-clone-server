import fastify, { FastifyInstance, FastifyPluginOptions } from "fastify";
import {
  createUserHandler,
  getUserHandler,
} from "../controllers/user.controller";

export function UserdRout(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.post("/", createUserHandler);
  app.get("/:id", getUserHandler);
  done();
}
