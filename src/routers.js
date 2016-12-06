// require.ensure 是 webpack的特殊语法，用来设置 code-split point
const Home = resolve => {
  require.ensure(['./views/index.vue'], () => {
    resolve(require('./views/index.vue'))
  })
}
const Invest = resolve => {
  require(['./views/invest/invest.vue'], resolve)
}
const InvestDetail = resolve => {
  require(['./views/invest-detail.vue'], resolve)
}
const Toast = resolve => {
  require.ensure(['./views/toast.vue'], () => {
    resolve(require('./views/toast.vue'))
  })
}
const Popup = resolve => {
  require.ensure(['./views/popup.vue'], () => {
    resolve(require('./views/popup.vue'))
  })
}
const ActionSheet = resolve => {
  require.ensure(['./views/action-sheet.vue'], () => {
    resolve(require('./views/action-sheet.vue'))
  })
}
// 登录
const Login = resolve => {
  require(['./views/user/login.vue'], resolve)
}
// 注册
const Register = resolve => {
  require(['./views/user/register.vue'], resolve)
}
const routers = [{
  path: '/',
  name: 'home',
  component: Home,
  meta:{title: '首页'}
}, {
  path: '/index',
  name: 'index',
  component: Home,
  meta:{title: '首页'}
}, {
  path: '/invest',
  name: 'invest',
  component: Invest
}, {
  path: '/investDetail/:projectId',
  name: 'investDetail',
  component: InvestDetail
},{
  path: '/toast',
  name: 'toast',
  component: Toast
}, {
  path: '/popup',
  name: 'popup',
  component: Popup
}, {
  path: '/action_sheet',
  name: 'action_sheet',
  component: ActionSheet
}, {
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/register',
  name: 'register',
  component: Register
},{
  path: '/demo',
  name: 'demo',
  component: require('./demos.vue'),
  children: [{
    path: 'popup',
    component: Popup
  }]
}]


export default routers;
