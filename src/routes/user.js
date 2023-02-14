const { Router } = require('express');
const { getAllUsers } = require("../controllers/user/getAllUsers");
const { getByName } = require("../controllers/user/getUserByName");
const { postUser } = require("../controllers/user/postUser");
const { getUserById } = require("../controllers/user/getUsersById")
const { validatePostUser } = require("../middlewares/validatePostUser");
const { updateUser } = require('../controllers/user/putUser.js')
const { deleteUser } = require('../controllers/user/deleteUser.js')
const userRouter = Router();

userRouter.get("/", getAllUsers, getByName )
userRouter.get("/:id", getUserById)
userRouter.post("/", postUser, validatePostUser)
userRouter.put("/", updateUser)
userRouter.delete('/:id', deleteUser)


module.exports = userRouter