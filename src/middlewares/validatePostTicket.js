const validatePostTicket = (req, res, next) => {
    const { code, almacen, email } = req.body;
    const nombresAlmacen = [
        "BELLO",
        "APARTADO",
        "ENVIGADO",
        "PARQUE BERRIO",
        "PICHINCHA",
        "CARABOBO",
        "CUNDINAMARCA", 
        "AYACUCHO",
        "PEREIRA",
        "BUENOS AIRES",
        "CENTRAL",
        "ITAGUI"]
    if (!code || isNaN(code)) return res.status(400).send(`insertar código númerico ticket`);
    if (!almacen) return res.status(400).send(`insertar nombre almacen`);
    if (almacen) {
        var existeAlmacen = nombresAlmacen.find(a => a === almacen.toUpperCase())
        if (!existeAlmacen) return res.status(400).send(`este almacen no existe`)
    }
    if (!email) return res.status(400).send(`insertar email usuario`)
    next()
    }
    
module.exports={
    validatePostTicket
}