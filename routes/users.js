var express = require('express');
var router = express.Router();
const User = require('../models/User')
const mongoose = require('mongoose')

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
  const {username, password} = req.body
  
  res.status(200).json({
    username,
    password
  })
})



module.exports = router;
