const { User } = require("../../db");
const { allUsers } = require("../../utils/allUserUtil")

const deleteUser = async(req, res) => {
    const { email } = req.body;

    try {

        const getAllUsers = await allUsers()
        const userToEliminate = getAllUsers.find((u) => u.email === email)
        const eliminatedUser = await User.destroy({where :{id: userToEliminate.id,}})
        res.status(200).json('Usuario eliminado de la DB');
      } catch (error) {
        res.status(400).send(console.log(error));
      }
}

module.exports= {
    deleteUser
}