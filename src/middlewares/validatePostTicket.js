const jwt = require('jsonwebtoken');

const validatePostTicket = (req, res, next) => {
    const { code, email, almacen } = req.body;
    //const nombresAlmacenes = ['bello', 'apartado', 'envigado', 'parque berrio', 'pichincha', 'carabobo', 'cundinamarca', 'ayacucho', 'pereira', 'buenos aires', 'central', 'itagui'];
    const authHeader = req.headers['authorization']; //Bearer TOKEN
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) return res.status (401).json({ error: "Null token" });
    if (!code || isNaN(code)) return res.status(400).send(`insertar código númerico ticket`);
    if (!email) return res.status(400).send(`insertar email usuario`)
    
    jwt.verify(token, process.env.REFRESH, (error, user) =>{
        if(error) return res.status(403).json({error: error.message})
        req.user=user;
    })
    next()
    }
    
module.exports={
    validatePostTicket
}