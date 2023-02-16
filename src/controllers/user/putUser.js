const { userToUpdateUtil } = require("../../utils/userToUpdateUtil");
const { allUsers } = require("../../utils/allUserUtil");
const { User } = require("../../db")

const updateUser = async (req, res) => {

    const {
        email, nombre, direccion, telephone
    } = req.body

    const getAllUsers = await allUsers()
    
    const userToUpdate = getAllUsers.find((u) => u.email === email)
    
    var updatedDetail;

    if (userToUpdate) {
        updatedDetail = userToUpdateUtil(email, nombre, direccion, telephone) 
    } else {
        res.status(404).json("Usuario no fue encontrado :(")
    }

    try {
        const [updatedUser] = await User.update(updatedDetail, {where: {id: userToUpdate.id}})
        res.status(200).json(updatedUser)
    } catch(error) {
        res.status(404).json(console.log(error))
    }
}

module.exports = {
    updateUser
}
