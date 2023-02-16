const { allTickets } = require('../../utils/allTicketsUtil');

const getTicketbyCode= async (req, res) => {
    try {
        const { code } = req.body;
        const allTickets = await allTickets()
        const ticket = await allTickets.find((e) => e.code.toString() == code)
        ticket ?
        res.status(200).json(ticket) :
        res.status(404).send('No hay un ticket con este código')
    } catch (error) {
        res.status(404).send(console.log(error))
    }
}

module.exports = {
    getTicketbyCode
}