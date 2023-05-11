"use strict";
exports.__esModule = true;
var zod_1 = require("zod");
var tableSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    userId: zod_1.z.string(),
    name: zod_1.z.string({ required_error: "name is required" })
});
