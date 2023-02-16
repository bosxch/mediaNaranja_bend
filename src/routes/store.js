const { Router } = require("express");
const { getAllStores } = require("../controllers/store/getAllStores.js");
const { getStoreByName } = require("../controllers/store/getStoreByName.js");
const { postStore } = require("../controllers/store/postStore.js");

const ticketsRouter = Router();

ticketsRouter.get("/", getAllStores, getStoreByName);
ticketsRouter.post("/", postStore);


module.exports = ticketsRouter