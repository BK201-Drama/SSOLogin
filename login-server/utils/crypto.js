let CryptoJS = require('crypto-js')

const screctStr = 'LinKaidiZhenDeHaoShuai'
const key = CryptoJS.enc.Utf8.parse("LinKaidiHaoShuai")

// 我们采用AES加密方式

function encrypt_ (content) {
  return CryptoJS.AES.encrypt (content, key, {
    iv: CryptoJS.enc.Utf8.parse(screctStr),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
}

function decrypt_ (content) {
  return CryptoJS.AES.decrypt (content, key, {
    iv: CryptoJS.enc.Utf8.parse(screctStr),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8)
}

module.exports = {
  encrypt_,
  decrypt_
}