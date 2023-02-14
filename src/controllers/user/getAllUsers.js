const { allUsers } = require("../../utils/allUserUtil");

const getAllUsers = async (req, res) => {
    try {
        let results = await allUsers()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: "no hay usuarios registrados" })
    }
}

module.exports={
    getAllUsers
}