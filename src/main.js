// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import echarts from 'echarts';

Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(VueQuillEditor);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  console.log("即将要进入的目标 路由对象",to);
  console.log("当前导航正要离开的路由",from);
  if(localStorage.getItem("token")){
    next();
  }else{
    alert("需要登录");
  }
})
