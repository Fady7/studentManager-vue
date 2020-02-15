import Vue from 'vue'
import VueRouter from 'vue-router'
import studentList from '../views/studentList'
import addStudent from '../views/addStudent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/studentList',
    name: 'studentList',
    component: studentList
  },
  {
    path: '/addStudent',
    name: 'addStudent',
    component: addStudent
  },
  {
    path: '*',
    redirect: '/studentList'
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router