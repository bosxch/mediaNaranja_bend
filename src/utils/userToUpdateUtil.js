const userToUpdateUtil = (email, nombre, direccion, telephone) => {
    const changedDetail = {}
    changedDetail.email = email
    changedDetail.nombre = nombre
    changedDetail.direccion = direccion
    changedDetail.telephone = telephone

    return changedDetail
}

module.exports = {
    userToUpdateUtil
}