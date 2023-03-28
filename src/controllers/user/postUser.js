const { User } = require("../../db");
const { jwtTokens } = require("../../utils/jwtUtil");

const postUser = async (req, res) => {

    try {
        const { numDocumento, email, nombre, direccion, telephone } = req.body;
        
            const newUser = await User.create({
                numDocumento: Number(numDocumento),
                email: email,
                nombre: nombre,
                direccion: direccion,
                telephone: Number(telephone),
            })
        
        let tokens = jwtTokens(newUser.id)
        res.cookie('refresh_token',tokens.refreshToken,{httpOnly: true})
        return res.status(200).json(results, tokens)
        
        //return res.status(201).json("Nuevo usuario creado correctamente")
    }
    catch (error){
        return res.status(400).json(console.log(error))
    }
}

module.exports = {
    postUser
}
