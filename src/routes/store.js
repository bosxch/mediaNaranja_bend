const { Router } = require("express");
const { getAllStores } = require("../controllers/store/getAllStores.js");
const { getStoreByName } = require("../controllers/store/getStoreByName.js");
const { postStore } = require("../controllers/store/postStore.js");
const { authenticateTokenAdmin } = require("../middlewares/validateJWT");

const ticketsRouter = Router();

ticketsRouter.get("/", authenticateTokenAdmin, getStoreByName, getAllStores);
ticketsRouter.post("/", authenticateTokenAdmin, postStore);


module.exports = ticketsRouter