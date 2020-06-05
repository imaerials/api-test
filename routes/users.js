var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) =>{
  res.status(200).json({
    msg: 'Estas en users'
  })

});
router.post('/create',(req,res)=>{
  const {user, password} = req.body


  res.status(200).json({
    msg:'Creando usuario',
    userCreated: user,
    passwordCreated: password
  })
})




module.exports = router;
