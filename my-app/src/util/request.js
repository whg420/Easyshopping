/*
 * @Author: your name
 * @Date: 2019-12-06 21:27:44
 * @LastEditTime : 2020-01-08 15:47:41
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \car\carPage\src\utils\request.js
 */
import axios from 'axios';

// 创建axios实例
const instance = axios.create({
  baseURL: 'http://169.254.19.79:8888',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
// 请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
}
);

// 响应拦截器
instance.interceptors.response.use(function (response) {
  // Do something with response data
  if (response.status === 200) {
    console.log(response.data,'----------------response.data.code-------------->');
    if (response.data) {
      return response.data.data
    } else {
      return {
        mes: "数据错误"
      }
    }

  } else {
    this.$notify({
      type: 'warning',
      message: response.type
    });
  }
}, function (error) {
  // Do something with response error
  this.$notify({
    type: 'warning',
    message: error
  });
  // return Promise.reject(error);
}
);

export default instance;
