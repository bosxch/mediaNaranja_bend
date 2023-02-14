const { Ticket, User } = require("../../db");

const postTicket = async(req, res) => {
    try {
    
        const { code, almacen, email } = req.body

        const user = await User.findOne({where: {email: email}})
        console.log(user)
        const newTicket = await Ticket.create({
            code: code,
            almacen: almacen,
            userId: user.dataValues.id
        })
        return res.status(200).json(`bono agregado correctamente`)
    } catch (error) { return res.status(400).json({ error: error.message }) }
}

module.exports = {
    postTicket
}