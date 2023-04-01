const { Router } = require("express");
const { getDataAdmin } = require("../controllers/admin/getDataAdmin.js");
const { postAdmin } = require("../controllers/admin/postAdmin.js");
const { putPassword } = require("../controllers/admin/putPassword.js");
const { putCountdown } = require("../controllers/admin/putCountdown.js");
const { authenticateToken } = require("../middlewares/validateJWT");

const adminRouer = Router();

adminRouer.get("/", getDataAdmin);
adminRouer.post("/", authenticateToken, postAdmin);
adminRouer.put("/", authenticateToken, putPassword, putCountdown);


module.exports = adminRouer