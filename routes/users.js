var express = require("express");
var router = express.Router();
const User = require("../models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const appConfig = require("../config/appConfig");
const bcrypt = require("bcrypt");
//index users
router.get("/", (req, res) => {
  console.log("Index users");
  res.status(200).json({
    msg: "Estas en users",
  });
});
//List users
router.get("/list", async (req, res) => {
  console.log("listing users");

  const users = await User.find({}, (err, users) => {
    res.status(200).json({
      users,
    });
  });
});
//create user
router.post("/create", (req, res) => {
  console.log("creating users");
  User.create({ ...req.body }, (err, user) => {
    res.status(200).json({
      user,
    });
  });
});
//login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  await User.findOne({ email }, (err, user) => {
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    bcrypt.compare(password, user.password, function (err, match) {
      if (match) {
        jwt.sign({ user }, appConfig.secret, (err, token) => {
          console.log(token);
        });

        return res.status(200).json({
          msg: "Congratss",
          user: user.name,
        });
      } else {
        return res.status(404).json({
          msg: "incorrect password",
        });
      }
    });

    console.log(user.name);
  });
});

module.exports = router;
