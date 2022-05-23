import Vue from 'vue'
import App from './App.vue'
import router from './router'

// apollo config
import  ApolloClient  from 'apollo-boost'
import VueApollo from 'vue-apollo'

const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'https://graphql.anilist.co/'

})
Vue.use(VueApollo)
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

//bootstrap-vue config

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
