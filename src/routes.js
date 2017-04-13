import Hello from './components/Hello'
import News from './components/news'
import Sports from './components/sports'
import Tv from './components/tv'
import Food from './components/food'
const routes = [
  {path: '/news', component: News},
  {path: '/sports', component: Sports},
  {path: '/tv', component: Tv},
  {path: '/food', component: Food},
  {path: '/', component: Hello},
  {path: '*', redirect: '/'}
]
export default routes
