const { Router } = require("express");
const { getDataAdmin } = require("../controllers/admin/getDataAdmin.js");
const { postAdmin } = require("../controllers/admin/postAdmin.js");
const { putPassword } = require("../controllers/admin/putPassword.js");
const { putCountdown } = require("../controllers/admin/putCountdown.js");
const { jwtMiddleware } = require('../middlewares/jwtMiddleware');
const { expressjwt: jwt } = require("express-jwt");
const adminRouer = Router();

adminRouer.get("/", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware,  getDataAdmin);
adminRouer.post("/", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, postAdmin);
adminRouer.put("/", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, putPassword, putCountdown);


module.exports = adminRouer