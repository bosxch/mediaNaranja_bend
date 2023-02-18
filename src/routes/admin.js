const { Router } = require("express");
const { getDataAdmin } = require("../controllers/store/getAllStores.js");
const { postPasword } = require("../controllers/store/postStore.js");

const adminRouer = Router();

adminRouer.get("/", getDataAdmin);
adminRouer.post("/", postPasword);


module.exports = adminRouer