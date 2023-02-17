const {Store} = require('../../db')

const postStore = async ( req , res ) => {

    try {
        const {name} = req.body

        const newStore = await Store.create({
            name: name
        })

        return res.status(200).send('El almacén se creó correctamente')
    }
    catch(error) {
        return res.status(400).send('error: ',error)
    }
}


module.exports = {
    postStore
}
