const { allUsers } = require("../../utils/allUserUtil");
const { User } = require("../../db")

const getUserById = async (req, res) => {
    try {
        const idUser = req.params.id
        const allUser = await allUsers()
        const user = await allUser.find((e) => e.id == idUser)
        await user ?
        res.status(200).json(user) :
        res.status(404).send('No hay usuarios con ese ID')
    } catch (error) {
        res.status(404).send(console.error(error))
    }
}

module.exports = {
    getUserById
}