const { Router } = require("express");
const { getDataAdmin } = require("../controllers/admin/getDataAdmin.js");
const { postPasword } = require("../controllers/admin/postPasword.js");

const adminRouer = Router();

adminRouer.get("/", getDataAdmin);
adminRouer.post("/", postPasword);


module.exports = adminRouer