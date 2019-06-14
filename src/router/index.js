import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/Login/login';
import index from '@/components/Index/index';
import orderCenter from '@/components/Index/pages/orderCenter';
import personalWork from '@/components/Index/pages/personalWork';
import orderManager from '@/components/Index/pages/orderManager';
import editPage from '@/components/Index/pages/editPage';
import userView from '@/components/Index/pages/userView';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path:'/',
      redirect: {
        name:'login'
      }
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {path:'/personalWork',name:'personalWork',component:personalWork},
        {path:'/orderCenter',name:'orderCenter',component:orderCenter},
        {path:'/orderManager',name:'orderManager',component:orderManager},
        {path:'/editPage',name:'editPage',component:editPage},
        {path:'/userView',name:'userView',component:userView}
      ]
    }
  ]
})

