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
    // name: "国合机构查看",
    redirect:"icCheck/list"
  },
  {
    path: "icCheck/:router/list",
    name: "国合机构查看",
    component: () => import('views/function/icCheck')
  },
  {
    path: "icCheck/:router/info/:id",
    name: "国合机构详情",
    component: () => import('views/function/icCheck/info')
  },
  {
    path: "apply",
    name: "申请填写",
    component: () => import('views/function/apply'),
  },
  {
    // path: "apply/:router/info/:id",
    path: "apply/:router/info",
    component: () => import('views/function/info')
  },
  {
    path: "apply/:router/list",
    component: () => import('views/function/list')
  },
  {
    path: "statistics",
    name: "统计汇总",
    component: () => import('views/function/statistics'),
  },
  {
    path: "statistics/:router/info/:id",
    component: () => import('views/function/info')
  },
  {
    path: "statistics/:router/list",
    component: () => import('views/function/list')
  },
]