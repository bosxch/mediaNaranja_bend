const { Router } = require("express");
const { getUserTickets } = require("../controllers/tickets/getUserTickets");
const { postTickets } = require("../controllers/tickets/postTickets");

const ticketsRouter = Router();

ticketsRouter.get("/:email", getUserTickets);
ticketsRouter.post("/", postTickets)

module.exports = ticketsRouter