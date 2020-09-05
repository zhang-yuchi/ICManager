import authMap from '../map/index.json'
export const mergeFun = function(auth){
  let authBox = []
 auth.map((authNum)=>{
  authMap[authNum].map((funModule)=>{
    let result = authBox.findIndex(authEle=>{
      return authEle.path==funModule.path
    })
    if(result==-1){
      authBox.push(funModule)
    }
  })
 }) 
 return authBox
}