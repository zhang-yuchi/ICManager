import subMap from './subMap'
export default function () {
  let subModules = [0,1]
  let modules = {
    "name": "扣分项目",
    "path": "/user/deduction",
    "icon": "el-icon-document-checked",
    listAuth:[0,1,2],
    hasSub:true,//含有子菜单
    subMenu:[]
  }
  subModules.map(num => {
    modules.subMenu.push(subMap[num])
  })
  return modules
}