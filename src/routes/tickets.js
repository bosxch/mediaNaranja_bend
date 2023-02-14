const { Router } = require("express");
const { getUserTickets } = require("../controllers/tickets/getUserTickets");
const { postTicket } = require("../controllers/tickets/postTickets");
const { getAllTickets } = require("../controllers/tickets/getAllTickets");
const { getTicketbyCode } = require("../controllers/tickets/getTicketbyCode.js");
const { updateTicket } = require("../controllers/tickets/updateTicket");
const { deleteTicket } = require("../controllers/tickets/deleteTicket");
const { validatePostTicket } = require("../middlewares/validatePostTicket")
const ticketsRouter = Router();

ticketsRouter.get("/:email", getUserTickets);
ticketsRouter.get("/", getAllTickets); //ADMIN ONLY
ticketsRouter.get("/:id", getTicketbyCode);
ticketsRouter.post("/", validatePostTicket, postTicket);
ticketsRouter.put("/", updateTicket); //ADMIN ONLY
ticketsRouter.delete("/", deleteTicket); //ADMIN ONLY

module.exports = ticketsRouter