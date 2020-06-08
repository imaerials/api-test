var express = require('express');
var router = express.Router();
const User = require('../models/User')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const appConfig = require('../config/appConfig')
//index users
router.get('/', (req, res) =>{
  console.log('Index users')
  res.status(200).json({
    msg: 'Estas en users'
  })
  

});
//List users
router.get('/list', async(req, res) =>{
  console.log('listing users')

 const users= await User.find({},(err,users)=>{
    res.status(200).json({
      users
    })
 })
  

});
//create user
router.post('/create',(req,res)=>{
  console.log('creating users')
     User.create({...req.body},(err,user)=>{
      res.status(200).json({
        user
      })

    }) 
})
//login user
router.post('/login',async (req,res)=>{
  const {email,password} = req.body
  await User.findOne({email},(err,user)=>{
    jwt.sign({ user}, appConfig.secret, (err, token)=> {
      console.log(token);
    });

    console.log('Login user found: ',user)
  })
 // const user = User.
  res.status(200).json({
    msg: 'ok user'
  })
})



module.exports = router;
