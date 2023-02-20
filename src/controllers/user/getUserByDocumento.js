const { allUsers } = require("../../utils/allUserUtil")

const getByDocumento = async (req, res, next) => {

    const { numDocumento } = req.query;

        if(numDocumento){
            try{
            const usersDB =  await allUsers() 
            const results = usersDB.find((e) => e.numDocumento?.toString() === numDocumento)
            if (results) return res.status(200).json(results)
            else return res.status(404).json("No hay usuarios con ese documento")
            }
            catch(error) { 
            return res.status(400).json(console.log(error))
            } 
        }else{
            next()
        }
}

module.exports = {
    getByDocumento
}