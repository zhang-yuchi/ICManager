var  baseUrl = process.env.NODE_ENV === 'production' ? "http://ghcpt.sicau.edu.cn:8080" : 'http://39.107.24.47:8080'
module.exports = {
  baseUrl,
  upFileUrl:this.baseUrl+"/file/upload"
  // baseUrl:"http://10.11.20.25:8080"
}