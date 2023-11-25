const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoose = require('mongoose');

const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const mongoUrl =
 "mongodb+srv://admin:wohoo.67dd@cluster0.djrjlwq.mongodb.net/Arabic-Reader?retryWrites=true&w=majority";


const port = 4000;

app.use(cors({
    origin:'*'
}));

mongoose.connect("mongodb+srv://admin:wohoo.67dd@cluster0.djrjlwq.mongodb.net/Arabic-Reader?retryWrites=true&w=majority");

const bookRoute = require("./routes/bookRoutes"); 
const userRoute = require("./routes/userRoutes")

app.use("/api", bookRoute);
app.use("/api", userRoute);


app.listen(port, function(){
    console.log("server is running");
})
