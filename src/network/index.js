import axios from 'axios'
const service = axios.create({
  baseURL: 'http://39.107.24.47:8080',
})
//请求处理
service.interceptors.request.use((config) => {
  config.headers = Object.assign({}, config.headers, {
    token: localStorage.getItem('token')
  })
  return config
})
//响应处理
service.interceptors.response.use((res) => {
  //做全局处理
  if (res.status === 200) {
    return res.data
  }
  return res

})
export default service