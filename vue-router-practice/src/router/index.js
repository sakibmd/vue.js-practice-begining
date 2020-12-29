import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Profile from '@/components/Profile'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/profile/:userid',
    name: 'Profile',
    component: Profile
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   name: 'About',
  //   //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
