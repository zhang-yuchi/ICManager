import service from './index'
export const excelDownload = function(className,jsonList){
  return service.post(`/excel/download?clazzName=${className}`,jsonList)
}
export const downloadFile = function(fileName){
  return service.get('/file',{
    params:{
      fileName
    }
  })
}