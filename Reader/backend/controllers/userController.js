const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
require("../models/UserModel")

const User = mongoose.model("UserInfo");
const jwt = require("jsonwebtoken");
const JWT_SECRET =
    "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";


const signUpUser = async (req, res) => {
    try {
        const { fname, lname, email, password, userType } = req.body;

        const encryptedPassword = await bcrypt.hash(password, 10);
        try {
            const oldUser = await User.findOne({ email });
            if (oldUser) {
                return res.json({ error: "User Exists" });
            }
            await User.create({
                fname,
                lname,
                email,
                password: encryptedPassword,
                userType,
            });
            res.send({ status: "ok" });
        } catch (error) {
            res.send({ status: "error" });
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });

    }

}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            console.log(email)
            return res.json({ error: "User Not found" });
        }
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ email: user.email }, JWT_SECRET, {
                expiresIn: "30m",
            });

            if (res.status(201)) {
                return res.json({ status: "ok", data: token });
            } else {
                return res.json({ error: "error" });
            }
        }
       
        res.json({ status: "error", error: "Invalid Password" });


    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });

    }

}
const getUserData = async (req, res) => {
    try {
        const { token } = req.body;
        try {
            const user = jwt.verify(token, JWT_SECRET, (err, res) => {
                if (err) {
                    return "token expired";
                }
                return res;
            });
            console.log(user);
            if (user == "token expired") {
                return res.send({ status: "error", data: "token expired" });
            }
            const useremail = user.email;
            User.findOne({ email: useremail })
                .then((data) => {
                    res.send({ status: "ok", data: data });
                })
                .catch((error) => {
                    res.send({ status: "error", data: error });
                });
        } catch (error) { }

    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}



module.exports = { loginUser, signUpUser, getUserData}
