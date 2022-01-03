const express = require("express");
const router = express.Router();

const User = require("../models/user.model");


//@route POST api/auth/register
//@desc Register user
//@access Public
router.post("/api/auth/signup", (req, res) => {
    const { username, email, password } = req.body;
    
    User.findOne({ email: email })
        .then((user) => {
        if (user) {
            return res.status(400).json({success: false,email: "Email already exists" });
        } else {
            const newUser = new User({
            username,
            email,
            password,
            });
    
            newUser.save().then((user) => res.json(user));
        }
        })
        .catch((err) => console.log(err));
    }
);