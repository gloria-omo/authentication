const router = require("express").Router()
const { signUp, login, updateUser, logout, getAll } = require("../controller/controller");
const  authenticate  = require("../middleware/authentication");
router.post("/signup", signUp)
router.post("/login", login)
router.get("/getalluser", getAll)
router.put("/updateuser", authenticate, updateUser)
router.patch("/logoutuser/:id", authenticate, logout)


module.exports = router
