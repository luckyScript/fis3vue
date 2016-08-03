import Vue from 'vue'
import VueRouter from 'vue-router'


import configRouter from '../src/route/index'
import App from '../src/component/App.vue'
import Index from '../src/component/Index.vue'

// 暴露vue到全局作用下，browser sync
window.Vue = Vue

Vue.config.debug = true
// 使用vue view插件
Vue.use(VueRouter)


// 路由相关
// create router
var router = new VueRouter({
    history: true,
    saveScrollPosition: true
})

// configure router

configRouter(router);


// boostrap the app
router.start(Vue.extend({App}), '#root')
// just for debugging
window.router = router

