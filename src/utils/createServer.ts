import fastify from "fastify";
import { BoardRout } from "../routes/board.routes";
import { TaskRout } from "../routes/Task.routes";
import cors from "@fastify/cors";
import { UserdRout } from "../routes/user.routes";
import { FastifyCookieOptions } from "@fastify/cookie";
import cookie from "@fastify/cookie";
import { authRoute } from "../routes/auth.routes";
import { TableRoutes } from "../routes/table.routes";

export async function createServer() {
  const app = fastify({});
  await app.register(cors, {
    origin: "https://kanban-clone-seven.vercel.app",
    credentials: true,
  });
  app.register(TaskRout, { prefix: "/api/tasks" });
  app.register(BoardRout, { prefix: "/api/boards" });
  app.register(UserdRout, { prefix: "/api/users" });
  app.register(authRoute, { prefix: "/api/auth" });
  app.register(TableRoutes, { prefix: "/api/table" });
  app.register(cookie, {
    parseOptions: {}, // options for parsing cookies
  } as FastifyCookieOptions);

  return app;
}
