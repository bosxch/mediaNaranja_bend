const {Store} = require('../../db')

const getAllStores = async (req, res) => {
    try {
        const stores = await Store.findAll()
        res.status(200).json(stores)
    } catch (error) {
        res.status(400).json(console.log(error))
    }
}

module.exports={
    getAllStores
}