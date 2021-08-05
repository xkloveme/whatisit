import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import newVideo from '@/page/newVideo'
import player from '@/page/player'

 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'newVideo', component: newVideo },
    { path: '/player', name: 'player', component: player },
  ]
})
