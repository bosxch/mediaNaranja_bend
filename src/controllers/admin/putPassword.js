const { Admin } = require("../../db")
const { AdminToUpdatePassword } = require("../../utils/AdminUpdatePassword")

const putPassword = async (req, res) => {

    const {
        password,
        email
    } = req.body
    
    var updatedPassword;

        updatedPassword = AdminToUpdatePassword( password ) 
   
    try {
        const [updatedAdmin] = await Admin.update(updatedPassword, {where: {email: email}})
        res.status(200).json(updatedAdmin)
    } catch(error) {
        res.status(404).json(console.log(error))
    }
}

module.exports = {
    putPassword
}
