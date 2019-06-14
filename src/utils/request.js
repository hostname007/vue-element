import axios from 'axios';
import qs from 'qs';
axios.defaults.retry=4;
axios.defaults.retryDelay=1000;
const service=axios.create({
  baseURL:process.env.BABEL_API,
  timeout:10000
})

service.interceptors.request.use(
  config=>{
    if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },error => {
    console.log(error);
    promise.reject(error);
  }
)
