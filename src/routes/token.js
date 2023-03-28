const { Router } = require('express');
const tokenRouter = Router();
const jwt = require('jsonwebtoken')
const { jwtTokens } = require('../utils/jwtUtil')
require('dotenv').config();
const { REFRESH } = process.env

tokenRouter.get('/refresh_token', async (req, res) => {
    try {
        const refreshToken = req.cookies.refresh_token;
        if (refreshToken === null) return res.status(401).json({error: 'Null refresh token'});
        jwt.verify(refreshToken, REFRESH, (error, user) => {
            if(error) return res.status(403).json({error: error.message});
            let tokens = jwtTokens(user);
            res.cookie('refresh_token', tokens.refreshToken, {httpOnly:true})
            res.json(tokens);
        })
    } catch (error) {
        res.status(401).json({error: error.message})
    }
})

tokenRouter.delete('/refresh_token', async (req, res) => {
try {
    res.clearCookie('refresh_token');
    return res.status(200).json({message: 'refresh token deleted'})
} catch (error) {
    res.status(401).json({error: error.message})
}
})

module.exports = tokenRouter
