//@ts-nocheck
import { Table } from "../schemas/table.schema";
import prisma from "../utils/prisma";
export const createTable = (input: Table) => {
  try {
    return prisma.tabel.create({
      data: {
        ...input,
      },
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const getTables = (id: string) => {
  try {
    return prisma.tabel.findMany({
      where: {
        boardId: id,
      },
      include: {
        tasks: true,
      },
    });
  } catch (error) {}
};

export const deleteTable = (id: string) => {
  try {
    return prisma.tabel.delete({
      where: {
        id,
      },
    });
  } catch (error) {}
};
