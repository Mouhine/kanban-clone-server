import { FastifyReply, FastifyRequest } from "fastify";
import { Board } from "../schemas/Board.schema";
import { createBoard, deleteBoard, getBoards } from "../services/board.service";

export async function createBoardHandler(
  req: FastifyRequest<{ Body: Board }>,
  reply: FastifyReply
) {
  try {
    const board = await createBoard(req.body);
    reply.code(201).send(board);
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function deleteBoardHandler(
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    const deletedBoard = await deleteBoard(req.params.id);
    reply.code(200).send(deletedBoard);
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function getAllBoardsHandler(
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    const boards = await getBoards(req.params.id);
    reply.code(200).send(boards);
  } catch (error: any) {
    console.log(error.message);
  }
}
