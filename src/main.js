
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'codemirror/lib/codemirror.css'
import {
  firestorePlugin
} from 'vuefire'
Vue.use(firestorePlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
