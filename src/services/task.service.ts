import { PrismaClient } from "@prisma/client";
import { Task, subTask } from "../schemas/Task.schema";
const prisma = new PrismaClient();

const createTask = async (body: Task) => {
  console.log(body);
  const tasks = body.subTasks;
  try {
    const task = await prisma.task.create({
      data: {
        title: body.title,
        description: body.description,
        status: body.status,
        userId: body.userId,
        tabelId: body.tabelId,
        subTasks: {
          createMany: {
            data: [...(tasks as [])],
          },
        },
      },

      include: {
        subTasks: true,
      },
    });

    return task;
  } catch (error: any) {
    console.log(error.message);
  }
};

const deleteTask = async (id: string) => {
  await prisma.task.delete({
    where: {
      id,
    },
  });
  return true;
};

const updateTask = async (update: Task) => {
  console.log(update, "update");

  return await prisma.task.update({
    where: {
      id: update.id,
    },
    data: {
      tabelId: update.tabelId,
    },
  });
};

const updateSubTask = async (update: Task) => {
  const subTasks = update.subTasks;
  await prisma.subTask.deleteMany();
  return await prisma.subTask.createMany({
    data: [...subTasks],
  });
};

const findTask = async (id: string) => {
  const task = await prisma.task.findFirst({
    where: {
      id,
    },
    include: {
      subTasks: true,
    },
  });
  return task;
};

const findTasks = async () => {
  return prisma.task.findMany({
    include: {
      subTasks: true,
    },
  });
};

export {
  createTask,
  findTask,
  findTasks,
  deleteTask,
  updateTask,
  updateSubTask,
};
