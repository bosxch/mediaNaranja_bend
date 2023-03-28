const jwt = require('jsonwebtoken')
require('dotenv').config();
const secret = process.env.SECRET
const refresh = process.env.REFRESH

function jwtTokens({id}) {
    const user = id
    const accesToken = jwt.sign(user,secret,{expiresIn:'1m'})
    const refreshToken = jwt.sign(user,refresh,{expiresIn:'5m'})
    return ({accesToken, refreshToken})
}

export {jwtTokens}