import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '欢迎登录国合管理系统',
    component: Login
  },
  {
    path:'/user',
    name:"国合处管理系统",
    component:()=>import('views/user'),
    children:[
      {
        path:"/",
        redirect:'info'
      },
      {
        path:"info",
        name:"个人信息",
        component:()=>import('views/user/info')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
