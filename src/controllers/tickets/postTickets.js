const { Ticket, User, Store } = require("../../db");

const postTicket = async(req, res) => {
    try {
    
        const { code, almacen, email } = req.body

        const user = await User.findOne({where: {email: email}})
        const [newStore, created] = await Store.findOrCreate({
            where: {
                name: almacen
            }
        })
        const newTicket = await Ticket.create({
            code: code,
            userId: user.dataValues.id,
            storeId: newStore.dataValues.id
        })
        return res.status(200).json(`bono agregado correctamente`)
    } catch (error) { 
        return res.status(400).json(console.log(error)) }
}

module.exports = {
    postTicket
}
