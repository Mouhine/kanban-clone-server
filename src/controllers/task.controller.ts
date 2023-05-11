import { FastifyReply, FastifyRequest } from "fastify";
import { Task } from "../schemas/Task.schema";
import {
  createTask,
  deleteTask,
  findTask,
  findTasks,
  updateSubTask,
  updateTask,
} from "../services/task.service";

const addTaskHandler = async (
  req: FastifyRequest<{
    Body: Task;
  }>,
  res: FastifyReply
) => {
  try {
    const task = await createTask(req.body);

    return res.code(201).send({ task });
  } catch (error) {
    console.log(error);
  }
};
const deleteTaskHandler = async (
  req: FastifyRequest<{
    Params: { id: string };
  }>,
  res: FastifyReply
) => {
  try {
    let deletedTodo = await deleteTask(req.params.id);
    res.code(200).send(deletedTodo);
  } catch (error) {}
};
const updateTaskHandler = async (
  req: FastifyRequest<{
    Body: Task;
  }>,
  res: FastifyReply
) => {
  try {
    const task = await updateTask(req.body);
    res.code(200).send(task);
  } catch (error: any) {
    console.log(error.message);
  }
};
const getTaskHandler = async (
  req: FastifyRequest<{
    Params: {
      id: string;
    };
  }>,
  res: FastifyReply
) => {
  const { id } = req.params;

  try {
    const task = await findTask(id);

    res.code(200).send(task);
  } catch (error) {
    res.code(500).send("some thing is wrong");
  }
};

const getAllHandler = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const tasks = await findTasks();

    return res.code(200).send(tasks);
  } catch (error) {}
};
const updateSubTaskHandler = async (
  req: FastifyRequest<{
    Body: Task;
  }>,
  res: FastifyReply
) => {
  try {
    const update = await updateSubTask(req.body);
    res.code(200).send(update);
  } catch (error) {}
};

export {
  addTaskHandler,
  deleteTaskHandler,
  updateTaskHandler,
  getTaskHandler,
  getAllHandler,
  updateSubTaskHandler,
};
