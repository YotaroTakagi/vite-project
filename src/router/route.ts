import { createRouter, createWebHistory } from 'vue-router'
import test2 from '../components/test2.vue'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: test2 },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router