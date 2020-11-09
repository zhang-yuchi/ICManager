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
  {
    path: "statistics/:router/list/:id",
    component: () => import('views/function/info/listInfo')
  },
  {
    path:"deduction/fill",
    component:()=>import("views/function/deduction/fill"),
    name:"扣分项填写"
  },
  {
    path:"deduction/check",
    component:()=>import("views/function/deduction/check"),
    name:"扣分项查看"
  },
  {
    path:"deduction/detail/:id",
    component:()=>import("views/function/deduction/check")
  },

  {
    path:"params",
    component:()=>import("views/function/params")
  }
]