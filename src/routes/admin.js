const { Router } = require("express");
const { getDataAdmin } = require("../controllers/admin/getDataAdmin.js");
const { postAdmin } = require("../controllers/admin/postAdmin.js");
const {putPassword} = require("../controllers/admin/putPassword.js")

const adminRouer = Router();

adminRouer.get("/", getDataAdmin);
adminRouer.post("/", postAdmin);
adminRouer.put('/', putPassword);


module.exports = adminRouer