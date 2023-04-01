const { Router } = require("express");
const { getDataAdmin } = require("../controllers/admin/getDataAdmin.js");
const { postAdmin } = require("../controllers/admin/postAdmin.js");
const { putPassword } = require("../controllers/admin/putPassword.js");
const { putCountdown } = require("../controllers/admin/putCountdown.js");
const { authenticateTokenAdmin } = require("../middlewares/validateJWT");

const adminRouer = Router();

adminRouer.get("/", getDataAdmin);
adminRouer.post("/", authenticateTokenAdmin, postAdmin);
adminRouer.put("/", authenticateTokenAdmin, putPassword, putCountdown);


module.exports = adminRouer