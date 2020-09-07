import subMap from './subMap';
export default function (subModules) {
  let modules = {
    "name": "填报申请",
    "path": "/user/apply",
    "icon": "el-icon-tickets",
    subMenu:[]
  }
  subModules.map(num=>{
    modules.subMenu.push(subMap[num])
  })
  return modules
}