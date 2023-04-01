const { Router } = require("express");
const { getAllStores } = require("../controllers/store/getAllStores.js");
const { getStoreByName } = require("../controllers/store/getStoreByName.js");
const { postStore } = require("../controllers/store/postStore.js");
const { authenticateToken } = require("../middlewares/validateJWT");

const ticketsRouter = Router();

ticketsRouter.get("/", authenticateToken, getStoreByName, getAllStores);
ticketsRouter.post("/", authenticateToken, postStore);


module.exports = ticketsRouter