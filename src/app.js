import Vue from 'vue'
import $ from 'jquery'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import MintUI from 'mint-ui' // 引入第三方UI库
import routes from './routers' // 路由配置
import store from './store'
import filters from './filters'
import './libs/px2rem'  // 设置1rem为100px
import App from './App.vue'  // 初始化组件注入
import FastClick from 'fastclick'
document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);

Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(VueResource)

Vue.config.debug = true

// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

//注册全局指令
Vue.directive('back-link', {
  bind: function (el) {
    el.addEventListener('click', function () {
      window.history.back()
    })
  }
})

// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  routes
})


// sync(store, router)

const vm = new Vue({
  store,
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

let indexScrollTop = 0;
// router.beforeEach((route, redirect, next) => {
//   if(route.path !== '/'){
//     indexScrollTop = document.body.scrollTop;
//   }
//   document.title = document.title || route.meta.title;
//   next()
// })

// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((to, from, next) => {

  // 处理左侧滚动不影响右边
  // $('html, body, .page').removeClass('scroll-hide');
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.userInfo.userId) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});
router.afterEach(route => {
  if(route.path !== '/'){
    document.body.scrollTop = 0;
  }else{
    Vue.nextTick(() => {
       document.body.scrollTop = indexScrollTop;
    })
  }
})
