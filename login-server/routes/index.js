var express = require('express');
var router = express.Router();

const userController = require('../controller/userController')

const crypto = require('../utils/crypto')

/* GET home page. */
router.get('/', async (req, res, next) => {
  // 将就一下
  res.header('Access-Control-Allow-Origin','*')
  res.header("Access-Control-Allow-Headers", "Content-Type")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')

  const obj = JSON.parse(crypto.decrypt_(req.query.token))
  
  const res_ = await userController.saveUserData(obj.username, obj.idCardNumber)
  
  res.send({
    token: crypto.encrypt_(JSON.stringify(res_))
  })
});

module.exports = router;