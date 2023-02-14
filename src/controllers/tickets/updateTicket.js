const { Ticket } = require('../../db')

const updateTicket = async (req, res) => {

    const { code, newCode } = req.body
    try {
        const updated = await Ticket.update({code: newCode}, {where: {code: code}})
        if (updated.length > 0) res.status(200).json(updated)
        else res.status(404).send("No se encontró el ticket para modificar")
    } catch(error) {
        res.status(404).json(console.log(error))
    }
}

module.exports = {
    updateTicket
}
