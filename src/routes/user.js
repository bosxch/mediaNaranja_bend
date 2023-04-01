const { Router } = require('express');
const { getAllUsers } = require("../controllers/user/getAllUsers");
const { getByDocumento } = require("../controllers/user/getUserByDocumento");
const { postUser } = require("../controllers/user/postUser");
const { getUserById } = require("../controllers/user/getUserById")
const { validatePostUser } = require("../middlewares/validatePostUser");
const { updateUser } = require('../controllers/user/putUser.js')
const { deleteUser } = require('../controllers/user/deleteUser.js');
const { authenticateToken } = require('../middlewares/validateJWT');
const userRouter = Router();

userRouter.get("/", authenticateToken, getByDocumento, getAllUsers )
userRouter.get("/:id", authenticateToken, getUserById)
userRouter.post("/", validatePostUser, postUser)
userRouter.put("/", updateUser)
userRouter.delete('/', deleteUser)


module.exports = userRouter