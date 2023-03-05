import { createRouter, createWebHistory } from 'vue-router'
import StopWatch from './components/StopWatch.vue'
import Timer from './components/Timer.vue'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/about', component: About },
  { path: '/stop_watch', component: StopWatch },
  { path: '/timer', component: Timer },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router