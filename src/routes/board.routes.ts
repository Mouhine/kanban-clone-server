import fastify, { FastifyInstance, FastifyPluginOptions } from "fastify";
import {
  createBoardHandler,
  deleteBoardHandler,
  getAllBoardsHandler,
} from "../controllers/board.controller";

export function BoardRout(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.post("/", createBoardHandler);
  app.get("/:id", getAllBoardsHandler);
  app.delete("/:id", deleteBoardHandler);
  done();
}
