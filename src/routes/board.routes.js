"use strict";
exports.__esModule = true;
exports.BoardRout = void 0;
var board_controller_1 = require("../controllers/board.controller");
function BoardRout(app, options, done) {
    app.post("/", board_controller_1.createBoardHandler);
    app.get("/:id", board_controller_1.getAllBoardsHandler);
    app["delete"]("/:id", board_controller_1.deleteBoardHandler);
    done();
}
exports.BoardRout = BoardRout;
