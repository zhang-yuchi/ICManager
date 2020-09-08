import subMap from './map'
export default function (subModules) {
  let modules = {
    "name": "统计汇总",
    "path": "/user/statistics",
    "icon": "el-icon-document-copy",
    listAuth: [1, 2, 3],
    subMenu: []
  }
  subModules.map(num => {
    modules.subMenu.push(subMap[num])
  })
  return modules
}