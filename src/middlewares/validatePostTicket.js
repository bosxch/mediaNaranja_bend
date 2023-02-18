const validatePostTicket = (req, res, next) => {
    const { code, email, almacen } = req.body;
    //const nombresAlmacenes = ['bello', 'apartado', 'envigado', 'parque berrio', 'pichincha', 'carabobo', 'cundinamarca', 'ayacucho', 'pereira', 'buenos aires', 'central', 'itagui'];
    
    if (!code || isNaN(code)) return res.status(400).send(`insertar código númerico ticket`);
    if (!email) return res.status(400).send(`insertar email usuario`)
    // if (!almacen) {
    //     return res.status(400).send(`insertar nombre almacen`);
    // } else {
    //     var existe = nombresAlmacenes.find((a) => a === almacen.toLowerCase())
    //     !existe? res.status(400).send(`insertar nombre correcto del almacen`) : next()
    //     } 
    next()
    }
    
module.exports={
    validatePostTicket
}