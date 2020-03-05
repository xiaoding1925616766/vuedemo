import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IndexDefault from '../views/IndexDefault.vue'
import Sun from '../views/Sun.vue'
import Line from '../views/Line.vue'
import Pie from '../views/Pie.vue'
import RichText from '../views/RichText.vue'
import Sunburst from '../views/Sunburst.vue'
import Radar from '../views/Radar.vue'
import PictorialBar from '../views/PictorialBar.vue'
import Gauge from '../views/Gauge.vue'
import Music from '../views/Music.vue'
import City from '../views/City.vue'
import Bar3d from '../views/Bar3d.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [{
        path: '',
        name: 'index',
        component: IndexDefault
      },
      {
        path: '/sun',
        name: 'sun',
        component: Sun
      },
      {
        path: '/line',
        name: 'Line',
        component: Line
      },
      {
        path: '/pie',
        name: 'pie',
        component: Pie
      },
      {
        path: '/richtext',
        name: 'RichText',
        component: RichText
      },
      {
        path: '/sunburst',
        name: 'Sunburst',
        component: Sunburst
      },
      {
        path: '/radar',
        name: 'Radar',
        component: Radar
      },
      {
        path: '/rictorialbar',
        name: 'PictorialBar',
        component: PictorialBar
      },
      {
        path: '/gauge',
        name: 'Gauge',
        component: Gauge
      },
      {
        path: '/music',
        name: 'Music',
        component: Music
      },
      {
        path: '/city',
        name: 'city',
        component: City
      },
      {
        path: '/3dbar',
        name: '3dbar',
        component: Bar3d
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router