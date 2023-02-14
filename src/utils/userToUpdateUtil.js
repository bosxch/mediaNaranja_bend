const userToUpdateUtil = (email, password, nombre, direccion, telephone) => {
    const changedDetail = {}
    changedDetail.email = email
    changedDetail.password = password
    changedDetail.nombre = nombre
    changedDetail.direccion = direccion
    changedDetail.telephone = telephone

    return changedDetail
}

module.exports = {
    userToUpdateUtil
}