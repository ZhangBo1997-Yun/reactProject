import axios from 'axios'
import { getItem } from './webStorage'
import ActionCreator from '../store/actionCreatore'
import store from '../store/store'
axios.interceptors.request.use(function (config) {
  // 请求拦截器传递token
  console.log('请求拦截器', config)
  let token = getItem('token') || ''
  config.data.token = token
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  // 假如token 失效 修改全局状态值让模态框显示
  let list = [-996, -997, -998, -999]
  if (list.indexOf(response.data.err) !== -1) {
    store.dispatch(ActionCreator.setTokenModal())
  }
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
export default axios