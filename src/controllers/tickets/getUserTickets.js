const { User, Ticket } = require("../../db");


const getUserTickets = async (req, res) => {
    const { email } = req.params;

    try {
       
        const filtredUser = await User.findOne({where: {email: email}})
        const allUserTickets = await Ticket.findAll({where: {user_tickets: filtredUser.id}})

        res.status(200).json(allUserTickets)

    } catch (error) {

        res.status(400).json({ message: error.message })
    }
};

module.exports = {
    getUserTickets
}