const { Admin } = require("../../db");
const { AdminUpdateCountdown } = require("../../utils/AdminUpdateCountdown")

const putCountdown = async (req, res) => {

    const {
        countdown,
        email
    } = req.body
    
    var updatedCountdown;

        updatedCountdown = AdminUpdateCountdown( countdown ) 
   
    try {
        const [updatedCountdown] = await Admin.update(updatedCountdown, {where: {email: email}})
        res.status(200).json(updatedCountdown)
    } catch(error) {
        res.status(404).json(console.log(error))
    }
};

module.exports = {
    putCountdown

};
