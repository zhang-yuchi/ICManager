import service from './index'
import axios from 'axios'
export const excelDownload = function (className, jsonList) {
  return service.post(`/excel/download?clazzName=${className}`, jsonList)
  // return axios.post(`http://39.107.24.47:8080/excel/download?clazzName=${className}`, jsonList)
}
export const downloadFile = function (fileName) {
  console.log(fileName);
  return service.get('/file/download', {
    params: {
      fileName
    },
    responseType: "blob",
    Headers: {
      'Content-Type': "application/json;charset=utf-8"
    }
  })
}