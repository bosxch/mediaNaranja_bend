const jwt = require('jsonwebtoken')
require('dotenv').config();
const {
    SECRET, 
    REFRESH
} = process.env

function jwtTokens(id) {
    const user = id
    const accesToken = jwt.sign({user},SECRET,{expiresIn:'10d'})
    const refreshToken = jwt.sign({user},REFRESH,{expiresIn:'365d'})
    return ({accesToken, refreshToken})
}

module.exports = {jwtTokens}