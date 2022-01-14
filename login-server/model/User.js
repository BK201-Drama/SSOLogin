/**
 * 建表
 * 在这里，搭好了框架，如果内部没有表，就会运行它，自行构建
 */

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: { type: String },
  idCardNumber: { type: String }
})

const User = mongoose.model('User', userSchema)

module.exports = User