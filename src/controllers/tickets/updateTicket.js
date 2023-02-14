const { Ticket } = require('../../db')

const updateTicket = async (req, res) => {

    const { code, almacen } = req.body
    
    if (!ticketToUpdate) {
        res.status(404).json("No hay un ticket con ese código")
    }
    try {
        const updated = await Ticket.update({almacen: almacen}, {where: {code: code}})
        res.status(200).json(updated)
    } catch(error) {
        res.status(404).json(console.log(error))
    }
}

module.exports = {
    updateTicket
}
