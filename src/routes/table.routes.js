"use strict";
exports.__esModule = true;
exports.TableRoutes = void 0;
var table_controller_1 = require("../controllers/table.controller");
var TableRoutes = function (app, options, done) {
    app.post("/", table_controller_1.createTableHandler);
    app.get("/:id", table_controller_1.getAllTabelsHandler);
    app["delete"]("/:id", table_controller_1.deleteTableHandler);
    done();
};
exports.TableRoutes = TableRoutes;
