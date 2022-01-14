const userService = require('../service/userService')

async function saveUserData (username, idCardNumber) {
  const res = await userService.saveUserData(username, idCardNumber)
  return res
}

module.exports = {
  saveUserData
}