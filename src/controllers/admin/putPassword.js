const { Admin } = require("../../db")
const { AdminToUpdatePassword } = require("../../utils/AdminUpdatePassword")

const putPassword = async (req, res, next) => {

    const {
        password,
        email
    } = req.body
    if (password) {
        var updatedPassword = AdminToUpdatePassword( password ) 
       
        try {
            const [updatedAdmin] = await Admin.update(updatedPassword, {where: {email: email}})
            res.status(200).json(updatedAdmin)
        } catch(error) {
            res.status(404).json(console.log(error))
        }
    }else {
        next()
    }
}

module.exports = {
    putPassword
}
