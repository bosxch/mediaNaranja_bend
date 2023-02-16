const { Ticket } = require("../db")

const allTickets = async () => {
    const dbTickets = await Ticket.findAll()
    
    const dbTicketsClean = dbTickets.map((e) => {
        return{
            id: e.id,
            code: e.code,
            dateRegistro: e.dateRegistro,
            storeId: e.storeId,
            userId: e.userId
        }
    })

    return dbTicketsClean
}


module.exports = {
    allTickets
}