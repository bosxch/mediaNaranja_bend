const { allTickets } = require("../../utils/allTicketsUtil")

const getAllTickets = async (req, res) => {
    try {
        let results = await allTickets()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: "no hay tickets registrados" })
    }
}

module.exports={
    getAllTickets
}