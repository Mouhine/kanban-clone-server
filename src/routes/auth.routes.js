"use strict";
exports.__esModule = true;
exports.authRoute = void 0;
var auth_controllers_1 = require("../controllers/auth.controllers");
function authRoute(app, options, done) {
    app.post("/register", auth_controllers_1.registerUserHandler);
    app.post("/login", auth_controllers_1.loginUserHandler);
    app.post("/refresh", auth_controllers_1.refreshTokeHandler);
    done();
}
exports.authRoute = authRoute;
