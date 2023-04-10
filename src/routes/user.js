const { Router } = require('express');
const { getAllUsers } = require("../controllers/user/getAllUsers");
const { getByDocumento } = require("../controllers/user/getUserByDocumento");
const { postUser } = require("../controllers/user/postUser");
const { getUserById } = require("../controllers/user/getUserById")
const { validatePostUser } = require("../middlewares/validatePostUser");
const { updateUser } = require('../controllers/user/putUser.js')
const { deleteUser } = require('../controllers/user/deleteUser.js');
const { jwtMiddleware } = require('../middlewares/jwtMiddleware');
const { expressjwt: jwt } = require("express-jwt");
const userRouter = Router();

userRouter.get("/", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, getByDocumento, getAllUsers )
userRouter.get("/:id", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, getUserById)
userRouter.post("/", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, validatePostUser, postUser)
userRouter.put("/", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, updateUser)
userRouter.delete('/', jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), jwtMiddleware, deleteUser)



module.exports = userRouter