"use strict";
exports.__esModule = true;
exports.UserdRout = void 0;
var user_controller_1 = require("../controllers/user.controller");
function UserdRout(app, options, done) {
    app.post("/", user_controller_1.createUserHandler);
    app.get("/:id", user_controller_1.getUserHandler);
    done();
}
exports.UserdRout = UserdRout;
