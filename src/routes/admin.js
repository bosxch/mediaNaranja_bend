const { Router } = require("express");
const { getDataAdmin } = require("../controllers/store/getDataAdmin.js");
const { postPasword } = require("../controllers/store/postPasword.js");

const adminRouer = Router();

adminRouer.get("/", getDataAdmin);
adminRouer.post("/", postPasword);


module.exports = adminRouer