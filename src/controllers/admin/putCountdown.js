const { Admin } = require("../../db");
const { AdminUpdateCountdown } = require("../../utils/AdminUpdateCountdown")

const putCountdown = async (req, res) => {

    const {
        countdown,
        email
    } = req.body
    
    var updatedCountdown = AdminUpdateCountdown( countdown ) 
   
    try {
        const [updated] = await Admin.update(updatedCountdown, {where: {email: email}})
        res.status(200).json(updated)
    } catch(error) {
        res.status(404).json(console.log(error))
    }
};

module.exports = {
    putCountdown
};
