"use strict";
exports.__esModule = true;
var zod_1 = require("zod");
var userSchema = zod_1.z.object({
    firstName: zod_1.z
        .string({ required_error: "firstName is required" })
        .min(6, "first name is too short"),
    lastName: zod_1.z
        .string({ required_error: "firstName is required" })
        .min(6, "last name is too short"),
    email: zod_1.z
        .string({ required_error: "firstName is required" })
        .email("please provide a valid email"),
    password: zod_1.z.string({ required_error: "firstName is required" })
});
