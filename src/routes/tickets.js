const { Router } = require("express");
const { getUserTickets } = require("../controllers/tickets/getUserTickets");
const { postTicket } = require("../controllers/tickets/postTickets");
const { getAllTickets } = require("../controllers/tickets/getAllTickets");
const { getTicketbyCode } = require("../controllers/tickets/getTicketbyCode.js");
const { updateTicket } = require("../controllers/tickets/updateTicket");
const { deleteTicket } = require("../controllers/tickets/deleteTicket");
const { validatePostTicket } = require("../middlewares/validatePostTicket");
const { getTicketsbyStore } = require("../controllers/tickets/getTicketsByStore");
const { jwtMiddleware } = require('../middlewares/jwtMiddleware');
const { expressjwt: jwt } = require("express-jwt");
const ticketsRouter = Router();

ticketsRouter.get("/", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, getTicketsbyStore, getAllTickets); //ADMIN ONLY
ticketsRouter.get("/", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, getTicketbyCode);
ticketsRouter.get("/:numDocumento", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, getUserTickets);
ticketsRouter.post("/", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, validatePostTicket, postTicket);
ticketsRouter.put("/", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware,  updateTicket); //ADMIN ONLY
ticketsRouter.delete("/", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, deleteTicket); //ADMIN ONLY

module.exports = ticketsRouter