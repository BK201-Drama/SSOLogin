import axios from './http'
import CryptoJS from '../utils/crypto'

var api = {
  async Login (info) {
    const {config: res} = await axios.request({
      method: 'get',
      url: '/',
      params: {
        token: CryptoJS.encrypt_(JSON.stringify(info))
      }
    })
    return res.params
  }
}

export default api