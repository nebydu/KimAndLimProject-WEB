import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-vue-3/dist/bootstrap-vue-3.es"
import axios from 'axios'
//아래줄을 활성화시키면 CORS 문제가 다시 발생됨
//axios.defaults.baseURL = 'http://localhost:8081'
axios.defaults.headers.common['Authorization'] = 'something'
axios.defaults.headers.get['Accepts'] = 'application/json'

const app = createApp(App)
app.config.productionTip = false;
app.config.devtools = true;
app.config.globalProperties.axios = axios;
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')





