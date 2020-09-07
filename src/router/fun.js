module.exports = [{
    path: "/",
    redirect: 'info'
  },
  {
    path: "info",
    name: "个人信息",
    component: () => import('views/user/info')
  },
  {
    path: "icCheck",
    name: "国合机构查看",
    component: () => import('views/function/icCheck')
  },
  {
    path: "apply",
    name: "申请填写",
    component: () => import('views/function/apply'),
  },
  {
    path: "apply/:router/info",
    component: () => import('views/function/info')
  },
  {
    path: "apply/:router/list",
    component: () => import('views/function/list')
  },
]