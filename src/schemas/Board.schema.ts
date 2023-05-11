import { z, TypeOf } from "zod";

const boardSchema = z.object({
  title: z.string({ required_error: "title is required" }),
  description: z.string(),
  userId: z.string(),
});

export type Board = TypeOf<typeof boardSchema>;
