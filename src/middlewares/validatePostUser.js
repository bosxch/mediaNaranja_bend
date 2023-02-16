const validatePostUser = (req, res, next) => {
    const {
        numDocumento, email, nombre, direccion, telephone
    } = req.body
    if(!numDocumento) return res.status(404).send(`ingresar num documento`);
    if(!email) return res.status(404).send(`ingresar email usuario`);
    if(!telephone) return res.status(404).send(`ingresar telephone usuario`);
    next()
}

module.exports = {
    validatePostUser
}
