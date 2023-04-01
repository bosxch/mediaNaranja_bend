const { allUsers } = require("../../utils/allUserUtil")
const jwt = require('jsonwebtoken')
const {jwtTokens} = require('../../utils/jwtUtil')

const getByDocumento = async (req, res, next) => {

    const { numDocumento } = req.query;

        if (numDocumento){
            try {
            const usersDB =  await allUsers() 
            const results = usersDB.find((e) => e.numDocumento == numDocumento)
            if (results) {
            console.log(results)
            let tokens = jwtTokens(results.id)
            res.cookie('refresh_token',tokens.refreshToken,{httpOnly: true})
            return res.status(200).json({results, tokens})
            }
            else return res.status(404).json("No hay usuarios con ese documento")
            }
            catch (error) { 
            return res.status(400).json(console.log({error: error.message}))
            } 
        }else{
            next()
        }
}

module.exports = {
    getByDocumento
}