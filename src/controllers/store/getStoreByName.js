const { Store } = require('../../db');
const { allStores } = require("../../utils/allStoresUtil")

const getStoreByName = async (req , res ) => {

    const {name} = req.query
    
    try {
        const stores = await allStores()
        const storeQuery = stores.filter(s => s.name.toLowerCase().includes(name.toLowerCase()))
        if (storeQuery) return res.status(200).json(storeQuery)
        else return res.status(400).json('No se encontraron almacenes con este nombre')
    }
    catch(error) {
        return res.status(400).json(console.log(error))
    };

};

module.exports = {
    getStoreByName
}