const { Admin } = require("../../db")

const postAdmin = async (req, res) => {

    try {
        const { email, password, countdown } = req.body;
        
            const admin = await Admin.create({
                email: email,
                password: password,
                countdown: countdown,
            })
        
        return res.status(201).json("Admin creado correctamente")
    }
    catch (error){
        return res.status(400).json(console.log(error))
    }
}

module.exports = {
    postAdmin
}
