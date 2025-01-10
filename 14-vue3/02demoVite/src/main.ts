// import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
const pinia = createPinia()
// 安装持久化插件 npm i pinia-plugin-persist
// 导入持久化插件
import piniaPersist from "pinia-plugin-persist"

pinia.use(piniaPersist)
app.use(pinia)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
