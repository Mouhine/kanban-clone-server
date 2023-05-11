import { FastifyReply, FastifyRequest } from "fastify";
import { createTable, deleteTable, getTables } from "../services/tabel.service";
import { Table } from "../schemas/table.schema";

export const createTableHandler = async (
  req: FastifyRequest<{ Body: Table }>,
  reply: FastifyReply
) => {
  try {
    const table = await createTable(req.body);
    console.log(table, "this us tabel");
    reply.code(201).send(table);
  } catch (error: any) {
    console.log(error.message);
  }
};

export const deleteTableHandler = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const deletedTable = await deleteTable(req.params.id);
    reply.code(200).send(deletedTable);
  } catch (error) {}
};

export const getAllTabelsHandler = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const boards = await getTables(req.params.id);
    reply.code(200).send(boards);
  } catch (error) {}
};
