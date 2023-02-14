const userToUpdateUtil = (userToUpdate, numDocumento, email, password, nombre, direccion, telephone) => {
    const changedDetail = {}
    changedDetail.id = userToUpdate.dataValues.id
    changedDetail.numDocumento = numDocumento
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