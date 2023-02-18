const { Admin } = require("../db")

const getDataAdmin = async (req, res) => {
    try {
        let admin = await Admin.findAll()
        res.status(200).json(admin)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports={
    getDataAdmin
}