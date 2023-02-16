const { User } = require("../db")

const allUsers = async () => {
    const dbUsers = await User.findAll()
    
    const dbUsersClean = dbUsers.map((e) => {
        return{
            id: e.id,
            numDocumento: e.numDocumento,
            email: e.email,
            nombre: e.nombre,
            direccion: e.direccion,
            telephone: e.telephone,
        }
    })

    return dbUsersClean
}


module.exports = {
    allUsers
}