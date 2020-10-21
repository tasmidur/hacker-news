import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/TopStories.vue'
import New from '../views/NewStories.vue'
import Show from '../views/ShowStories.vue'
import Ask from '../views/AskStories.vue'
import Job from '../views/JobStories.vue'
import Single from '../views/Single.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  { path: '/', 
  redirect: '/top' 
  },
  {
    path: "/story/:id",
    name: "Single",
    component: Single
  },
  {
    path: '/job',
    name: 'Job',
    component: Job
  },
  {
    path: '/ask',
    name: 'Ask',
    component: Ask
  },
  {
    path: '/show',
    name: 'Show',
    component: Show
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
