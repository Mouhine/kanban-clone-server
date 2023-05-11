"use strict";
exports.__esModule = true;
var zod_1 = require("zod");
var subTask = zod_1.z.object({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string(),
    checked: zod_1.z.boolean(),
    tabelId: zod_1.z.string()
});
var taskSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string({ required_error: "title is required" }),
    description: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    subTasks: zod_1.z.array(subTask),
    status: zod_1.z["enum"](["DOING", "DONE", "TODO"]),
    userId: zod_1.z.string(),
    tabelId: zod_1.z.string()
});
