import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Fun from './fun'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '欢迎登录国合管理系统',
    component: Login
  },
  {
    path:'/user',
    component:()=>import('views/user'),
    children:Fun
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = to.name
  }
  next();
})

export default router
