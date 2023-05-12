import prisma from "../../src/utils/prisma";
async function clean() {
  await prisma.task.deleteMany();
}

clean();
