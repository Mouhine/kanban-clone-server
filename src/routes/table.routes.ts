import { FastifyInstance, FastifyPluginOptions } from "fastify";
import {
  createTableHandler,
  deleteTableHandler,
  getAllTabelsHandler,
} from "../controllers/table.controller";
export const TableRoutes = (
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) => {
  app.post("/", createTableHandler);
  app.get("/:id", getAllTabelsHandler);
  app.delete("/:id", deleteTableHandler);
  done();
};
