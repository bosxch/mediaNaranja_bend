const { Store } = require("../db")

const allStores = async () => {
    const dbStores = await Store.findAll()
    
    const dbStoresClean = dbStores.map((e) => {
        return{
            id: e.id,
            name: e.name
        }
    })
    return dbStoresClean
}

module.exports = {
    allStores
}