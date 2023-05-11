import { z, ZodTypeAny } from "zod";

const subTask = z.object({
  id: z.string().optional(),
  title: z.string(),
  checked: z.boolean(),
  tabelId: z.string(),
});

const taskSchema = z.object({
  id: z.string().optional(),
  title: z.string({ required_error: "title is required" }),
  description: z.string(),
  createdAt: z.date(),
  subTasks: z.array(subTask),
  status: z.enum(["DOING", "DONE", "TODO"]),
  userId: z.string(),
  tabelId: z.string(),
});
export type Task = z.TypeOf<typeof taskSchema>;
export type subTask = z.TypeOf<typeof subTask>;
