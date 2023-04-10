const { Router } = require("express");
const { getAllStores } = require("../controllers/store/getAllStores.js");
const { getStoreByName } = require("../controllers/store/getStoreByName.js");
const { postStore } = require("../controllers/store/postStore.js");
const { jwtMiddleware } = require('../middlewares/jwtMiddleware');
const { expressjwt: jwt } = require("express-jwt");

const ticketsRouter = Router();

ticketsRouter.get("/", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, getStoreByName, getAllStores);
ticketsRouter.post("/", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, postStore);


module.exports = ticketsRouter