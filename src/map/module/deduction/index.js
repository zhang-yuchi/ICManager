import subMap from './subMap'
export default function () {
  let modules = {
    "name": "扣分项目",
    "path": "/user/deduction",
    "icon": "el-icon-document-checked",
    listAuth:[0,1,2],
    hasSub:true,//含有子菜单
    subMenu:subMap
  }
  return modules
}