const { User, Ticket } = require("../../db");

const postTicket = async (req, res) => {

    try {
        const { email, ticketId } = req.body

        const filtredUser = await User.findOne({where: {email: email}})

        const dbTicket = await Ticket.findOrCreate({
            where :{
                user_tickets : filtredUser.id,
                id: ticketId
                }
        })
        return res.status(200).json("Favorite added to DB")
    } catch (error) {
        return res.status(403).json({ msg: error })
    }
};

module.exports = {
    postTicket
}
