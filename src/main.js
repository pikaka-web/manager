import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';

import request from './utils/request'
import storage from './utils/storage'
import api from './api'

console.log("环境变量=>", import.meta.env)
const app = createApp(App);

//全局属性
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;
app.config.globalProperties.$storage = storage;


app.use(router)
    .use(store)
    .use(ElementPlus, { size: 'small' })
    .mount('#app')
