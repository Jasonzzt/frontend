import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
/*导入ElementUI*/
import elementUI from 'element-ui';
/*导入ElementUI的CSS样式*/
import 'element-ui/lib/theme-chalk/index.css';
/*Vue使用ElementUI*/
Vue.use(elementUI);
/*导入axios*/
import axios from "axios";
/*全局绑定axios*/
Vue.prototype.$axios = axios;

/*导入qs*/
import qs from 'qs';
/*全局绑定*/
Vue.prototype.$qs = qs;

//import Store from './store/index';
import Vuex from 'vuex'
Vue.use(Vuex)
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  //Store,
  computed:{
    userInfo(){
      return store.state.userInfo;
    }
  },
  render: h => h(App)
}).$mount('#app')
