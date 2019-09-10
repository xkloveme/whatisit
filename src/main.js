/*
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-07-06 09:07:03
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-10 17:21:28
 */
import Vue from 'vue'
import App from './App.vue'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

Vue.config.productionTip = false
Vue.use(codemirror)
new Vue({
  render: h => h(App),
}).$mount('#app')
