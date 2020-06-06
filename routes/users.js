var express = require('express');
var router = express.Router();
const User = require('../models/User')
const mongoose = require('mongoose')

/* GET users listing. */
router.get('/', (req, res) =>{
  res.status(200).json({
    msg: 'Estas en users'
  })

});
router.post('/create',async (req,res)=>{
  const {username, password} = req.body
    await User.create({...req.body},(err,user)=>{
      console.log(user)

    })



  res.status(200).json({
    msg:'Creando usuario',
    userCreated: username,
    passwordCreated: password
  })
})




module.exports = router;
