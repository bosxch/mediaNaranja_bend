const { Router } = require("express");
const { getDataAdmin } = require("../controllers/admin/getDataAdmin.js");
const { postAdmin } = require("../controllers/admin/postAdmin.js");
const { putPassword } = require("../controllers/admin/putPassword.js");
const { putCountdown } = require("../controllers/admin/putCountdown.js");

const adminRouer = Router();

adminRouer.get("/", getDataAdmin);
adminRouer.post("/", postAdmin);
adminRouer.put("/password", putPassword);
adminRouer.put("/", putCountdown);


module.exports = adminRouer