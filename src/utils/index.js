import {
  authMap
} from '../map/index'
console.log(authMap);
export const mergeFun = function (auth) {
  let authBox = []
  auth.map((authNum) => {
    authMap[authNum].map((funModule) => {
      if (!funModule.subMenu) {
        let result = authBox.findIndex(authEle => {
          return authEle.path == funModule.path
        })
        if (result == -1) {
          authBox.push(funModule)
        }
      } else {
        if (authBox.findIndex(val => {
            return val.path == funModule.path
          }) == -1) {
          authBox.push(funModule)
        } else {
          let objectModule = authBox.find(v => {
            return v.path === funModule.path
          })
          console.log(objectModule);
          objectModule.subMenu = _flat(objectModule['subMenu'], funModule.subMenu)
        }
      }
    })
  })
  return authBox
}
export const checkAuth = function(auth,role){
  let flag = false
  auth.map(au=>{
    role.map(item=>{
      if(au==item){
        flag = true
      }
    })
  })
  return flag
}
function _flat(obj, src) {
  const len = obj.length
  src.map(item => {
    obj.push(item)
  })
  let result = []
  //单数组去重
  for (let i = 0; i < obj.length; i++) {
    let index = result.findIndex(val => {
      return val.path == obj[i].path
    })
    if (index == -1) {
      result.push(obj[i])
    }
  }
  return result
}