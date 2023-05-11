"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.deleteTable = exports.getTables = exports.createTable = void 0;
var prisma_1 = require("../utils/prisma");
var createTable = function (input) {
    try {
        return prisma_1["default"].tabel.create({
            data: __assign({}, input)
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.createTable = createTable;
var getTables = function (id) {
    try {
        return prisma_1["default"].tabel.findMany({
            where: {
                boardId: id
            },
            include: {
                tasks: true
            }
        });
    }
    catch (error) { }
};
exports.getTables = getTables;
var deleteTable = function (id) {
    try {
        return prisma_1["default"].tabel["delete"]({
            where: {
                id: id
            }
        });
    }
    catch (error) { }
};
exports.deleteTable = deleteTable;
