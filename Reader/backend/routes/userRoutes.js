const express = require('express');
const userRoute = express();

const bodyParser = require("body-parser");
userRoute.use(bodyParser.json())
userRoute.use(bodyParser.urlencoded({extended:true}));
userRoute.use(express.static("public"))

const userController = require("../controllers/userController")

userRoute.post("/loginuser", userController.loginUser)
userRoute.post("/signup", userController.signUpUser)
userRoute.post("/userdata", userController.getUserData)

module.exports = userRoute;