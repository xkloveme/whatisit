
import Vue from 'vue'
import App from './App.vue'
import { codemirror } from 'vue-codemirror'
// import VueXgplayer from './components/xgplayer-vue.vue'
import 'codemirror/lib/codemirror.css'

Vue.config.productionTip = false
Vue.use(codemirror)
// Vue.component(VueXgplayer, VueXgplayer)
new Vue({
  render: h => h(App),
}).$mount('#app')
