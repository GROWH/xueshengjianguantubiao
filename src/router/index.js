import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
   redirect:'/home/index'
  },
  {
    path: '/home',
    component: Home,
    children:[
      {
        path: 'index',
        name: 'index',   
        meta:{
            title:'首页'
        },
        // 路由懒加载  有利于优化
        component:()=>import("../views/index")
      },
      {
        path: 'student',
        name: 'student',
        meta:{
          title:'学生数据'
      },
        component:()=>import("../views/student")
      },
      {
        path: 'teacher',
        name: 'teacher',  //name与vfooter组件里  <el-menu-item index="index">首页</el-menu-item>的index要一致 路由跳转
        meta:{
          title:'教师数据'
      },
        component:()=>import("../views/teacher")
      },
      {
        path: 'class',
        name: 'class',
        meta:{
          title:'教室数据'
      },
        component:()=>import("../views/class")
      },
      {
        path: 'error',
        name: 'error',
        meta:{
          title:'违纪数据'
      },
        component:()=>import("../views/error")
      }
    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
