const { Ticket, User } = require("../../db");

const deleteTicket = async(req, res) => {
    const { code, email } = req.body;

    try {
        const filtredUser = await User.findOne({where: {email: email}})
        console.log(filtredUser)
        const dbFavorite = await Ticket.destroy({
            where :{code: code, userId: filtredUser.dataValues.id}
        })
        res.status(200).json('ticket deleted');
      } catch (error) {
        res.status(400).send(console.log(error));
      }
}

module.exports= {
    deleteTicket
}