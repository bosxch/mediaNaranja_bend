const { User } = require("../../db")

const postUser = async (req, res) => {

    try {
        const { numDocumento, email, nombre, direccion, telephone } = req.body;
        
            const newUser = await User.create({
                numDocumento: numDocumento,
                email: email,
                nombre: nombre,
                direccion: direccion,
                telephone: telephone,
            })
        
        return res.status(201).json("Nuevo usuario creado correctamente")
    }
    catch (error){
        return res.status(400).json(console.log(error))
    }
}

module.exports = {
    postUser
}
