var express = require('express');
var router = express.Router();
const User = require('../models/User')
const mongoose = require('mongoose')

/* GET users listing. */
router.get('/', (req, res) =>{
  console.log('Index users')
  res.status(200).json({
    msg: 'Estas en users'
  })
  

});
router.get('/list', async(req, res) =>{
  console.log('listing users')

 const users= await User.find({},(err,users)=>{
    res.status(200).json({
      users
    })
 })
  

});
router.post('/create',async (req,res)=>{
  console.log('creating users')
    await User.create({...req.body},(err,user)=>{
      res.status(200).json({
        user
      })

    }) 
})




module.exports = router;
