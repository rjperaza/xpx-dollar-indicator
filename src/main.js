import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { Config } from './services/config'
import { Connections } from './services/connection'
import { Persistence } from './services/persistence'

Vue.use(VueAxios, axios);
Vue.filter('formatUSD', function (amount) {
  return amount.substring(0, 8);
});

Vue.prototype.$localStorage = new Persistence(localStorage)
Vue.prototype.$sessionStorage = new Persistence(sessionStorage)

async function configIntegration() {
  try {
    const configInfo = await axios.get('../config/config.json')
    if (configInfo.data.version === 'TESTNET') {
      Vue.prototype.$config = new Config(configInfo.data.environment.TESTNET)
    } else {
      Vue.prototype.$config = new Config(configInfo.data.environment.MAINNET)
    }

    Vue.prototype.$provider = new Connections(Vue.prototype.$config.nodes[0])
    /*console.log('CONFIG ---->', Vue.prototype.$config);
    console.log('PROVIDER ---> ', Vue.prototype.$provider);*/
  } catch (e) {
    console.error(e)
  }

  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
}

configIntegration()