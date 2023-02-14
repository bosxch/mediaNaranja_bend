const { Store, Ticket} = require("../../db");
const { allStores } = require("../../utils/allStoresUtil")

const getTicketsbyStore = async (req, res, next) => {
    const { almacen } = req.query;

    if (almacen) {

        try{
            const stores = await allStores();
            const myStore = await stores.find((a) => a.name.includes(almacen))
            console.log(myStore)
            const storeTickets = await Ticket.findAll({where: {storeId: myStore.id}})
            return res.status(200).json(storeTickets)
        }
        catch(error) {
            return res.status(400).json(console.log(error))
        }
    } else {
     next()
    }
}

module.exports = {
    getTicketsbyStore
}