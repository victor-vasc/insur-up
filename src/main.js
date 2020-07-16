import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Vuebar from 'vuebar';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuebar);
import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
