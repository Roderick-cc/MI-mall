import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/js/base.js'

// 引入全局Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)




import "./assets/mui/css/mui.min.css"
// 导入扩展图标样式
import "./assets/mui/css/icons-extra.css"
//阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false




new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
