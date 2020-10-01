var express = require("express");
var router = express.Router();
const Product = require("../models/Product");
const mongoose = require("mongoose");
const appConfig = require("../config/appConfig");
//index users
router.get("/", (req, res) => {
  console.log("Index products");
  res.status(200).json({
    msg: "Estas en products",
  });
});
//List product
router.get("/list", async (req, res) => {
  console.log("listing products");

  const products = await Product.find({}, (err, product) => {
    res.status(200).json({
      product,
    });
  });
});
//create product
router.post("/add", (req, res) => {
  console.log("creating products");
  Product.create({ ...req.body }, (err, product) => {
    res.status(200).json({
      product,
    });
  });
});
module.exports = router;
