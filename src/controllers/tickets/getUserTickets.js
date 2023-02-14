const { Ticket, User } = require("../../db");

const getUserTickets = async (req, res) => {

    try{
        const { email } = req.body;
        
        const user = await User.findOne({where: {email: email}})
        const userId = user.dataValues.id
        const userTickets = await Ticket.findAll({where: {userId: userId}})
        console.log(userTickets)
        res.status(200).json(userTickets)
    }
    catch(error) {
        res.status(400).json(console.log(error))
    }
}

module.exports = {
    getUserTickets
}