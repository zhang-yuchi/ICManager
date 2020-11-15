import {
  authMap
} from '../map/index'

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
          // console.log(objectModule);
          objectModule.subMenu = _flat(objectModule['subMenu'], funModule.subMenu)
        }
      }
    })
  })
  return authBox
}
export const checkAuth = function (auth, role) {
  let flag = false
  auth.map(au => {
    role.map(item => {
      if (au == item) {
        flag = true
      }
    })
  })
  return flag
}
export const reflectSchema = function (columns, map) {
  let column = columns.column
  column = column.map(item => {
    if (map[item.prop]) {
      //若存在相应映射关系则改变该字段为Oracle映射字段
      item.prop = map[item.prop]
    }
    return item
  })
  // console.log(column);
  return column
}
export const getCurModule = (that, tableRule) => {
  let module = "";
  let router = that.$route.path;
  let icReg = /\/user\/icCheck/;
  let apply = /\/user\/apply/;
  let statistics = /\/user\/statistics/;
  let useradmin = /\/user\/useradmin/;
  if (icReg.test(router)) {
    module = "icCheck";
  } else if (apply.test(router)) {
    module = "apply";
  } else if (statistics.test(router)) {
    module = "statistics";
    that.needImport = true
  } else if (useradmin.test(router)) {
    module = "useradmin";
  }
  // console.log(module);
  let params = that.$route.params.router;
  // console.log(params);
  return tableRule[module][params];

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

// export const strHump = (str) => {
//   let arr = str.split('-')
//   let _str = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     _str += arr[i].replace(arr[i][0],arr[i][0].toUpperCase())
//   }
//   return _str
// }