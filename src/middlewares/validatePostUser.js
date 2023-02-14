const validatePostUser = (req, res, next) => {
    const {
        numDocumento, email, password, nombre, direccion, telephone
    } = req.body
    if(!numDocumento) return res.status(404).send(`ingresar num documento`);
    if(!email) return res.status(404).send(`ingresar email usuario`);
    if(!password) return res.status(404).send(`ingresar password usuario`);
    if(!nombre) return res.status(404).send(`ingresar nombre usuario`);
    if(!direccion) return res.status(404).send(`ingresar direccion usuario`);
    if(!telephone) return res.status(404).send(`ingresar telephone usuario`);
    next()
}

module.exports = {
    validatePostUser
}