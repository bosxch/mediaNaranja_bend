const { Ticket, User } = require("../../db");
const { allTickets } = require("../../utils/allTicketsUtil")
const getUserTickets = async (req, res) => {

    try{
        const { numDocumento } = req.params;
        
        const user = await User.findOne({where: {numDocumento: numDocumento}})
        const userId = user.dataValues.id
        const getTickets = await allTickets()
        const userTickets = await getTickets.filter(t => t.userId == userId)
        console.log(userId)
        res.status(200).json(userTickets)
    }
    catch(error) {
        res.status(400).json(console.log(error))
    }
}

module.exports = {
    getUserTickets
}