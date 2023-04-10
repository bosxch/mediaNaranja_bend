const { expressjwt: jwt } = require("express-jwt");

function jwtMiddleware(req, res, next) {
    //console.log(req.auth)
    if (!req.auth || req.auth.admin !== true) {
        //respuesta para el usuario que no es admin
        return res.status(401).send({
          message: "¡Usted no tiene autorización para acceder",
        });    
      }
    next()
}

module.exports = {
    jwtMiddleware
}