const { expressjwt: jwt } = require("express-jwt");

function jwtMiddleware(req, res, next) {
    //console.log(req.auth)
    if (req.auth.admin !== true) {
        //respuesta para el usuario que no es admin
        return res.status(401).send({
          message: "¡No me jodás! ¿En serio creiste que estabas autorizado?",
        });    
      }
    next()
}

module.exports = {
    jwtMiddleware
}