import axios from "axios"

let BASEURL = 'http://localhost:9999/'

const instance = axios.create({
    baseURL: BASEURL,
    timeout: 100000,
});
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;