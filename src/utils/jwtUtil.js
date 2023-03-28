const jwt = require('jsonwebtoken')
require('dotenv').config();
const {
    SECRET, 
    REFRESH
} = process.env

function jwtTokens({ id }) {
    const user = id
    const accesToken = jwt.sign( user, SECRET, {expiresIn:'1m'})
    const refreshToken = jwt.sign( user, REFRESH, {expiresIn:'5m'})
    return ({ accesToken, refreshToken })
}

export { jwtTokens }