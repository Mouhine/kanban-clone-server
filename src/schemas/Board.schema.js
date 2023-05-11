"use strict";
exports.__esModule = true;
var zod_1 = require("zod");
var boardSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "title is required" }),
    description: zod_1.z.string(),
    userId: zod_1.z.string()
});
