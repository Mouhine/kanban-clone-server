import prisma from "../../utils/prisma";

async function cleanDB() {
  await prisma.user.deleteMany();
  await prisma.task.deleteMany();
  await prisma.tabel.deleteMany();
  await prisma.board.deleteMany();
}

cleanDB();
