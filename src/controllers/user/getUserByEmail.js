const { allUsers } = require("../../utils/allUserUtil")

const getByName = async (req, res, next) => {

    const { email } = req.query;

        if(email){
            try{
            const usersDB =  await allUsers() 
            const results = usersDB.filter(e => e.email?.toLowerCase().includes(email.toLowerCase()))
            if (results.length > 0) return res.status(200).json(results)
            else return res.status(404).json("No hay usuarios con ese nombre")
            }
            catch(error) { 
            return res.status(400).json(console.log(error))
            } 
        }else{
            next()
        }
}

module.exports = {
    getByName
}