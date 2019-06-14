import axios from 'axios';
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem("token")) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      console.log("132456")
      config.headers.Authorization = localStorage.getItem("token");
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:  401
          // 返回 401 清除token信息并跳转到登录页面
          // store.commit(types.LOGOUT);
          localStorage.removeItem("token")
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });
export default service;
