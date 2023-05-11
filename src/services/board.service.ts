import { Board } from "../schemas/Board.schema";
import prisma from "../utils/prisma";

export async function createBoard(board: Board) {
  console.log(board);
  return prisma.board.create({
    data: {
      title: board.title,
      description: board.description,
      userId: board.userId,
    },
  });
}
export async function deleteBoard(id: string) {
  return prisma.board.delete({
    where: {
      id,
    },
  });
}
export async function getBoards(id: string) {
  return prisma.board.findMany({
    where: {
      userId: id,
    },
  });
}
