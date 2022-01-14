const User = require('../model/User')

/**
 * 保存用户数据
 * @param username
 * @param idCardNumber
 * @returns {Promise<*>}
 */
async function saveUserData (username, idCardNumber) {
  try {
    const res = await User.create({
      username: username,
      idCardNumber: idCardNumber
    })
    console.log(res)
    return res
  } catch (e) {
    throw new Promise.resolve("Error")
  }
}

module.exports = {
  saveUserData
}