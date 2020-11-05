import axios from 'axios' //引入 axios

// 创建 axios 实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:8088', //后端地址
  timeout: 15000, // 请求超时时间
})

export default service
