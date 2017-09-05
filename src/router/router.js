import App from '../App'
// 组件
const home = r => require.ensure([], () => r(require('@P/home/home')), 'home');
const city = r => require.ensure([], () => r(require('@P/city/city')), 'city');
const msite = r => require.ensure([], () => r(require('@P/msite/msite')), 'msite');
const search = r => require.ensure([], () => r(require('@P/search/search')), 'search');
const login = r => require.ensure([], () => r(require('@P/login/login')), 'login');
const food = r => require.ensure([], () => r(require('@P/food/food')), 'food');


export default [{
  path: '',
  component: App,                             //顶级路由，对应index.html
  children: [                                 //二级路由  对应App.vue
    { path: '', redirect: '/home' },             //地址为空时跳转home页面
    { path: '/home', component: home },          //首页城市列表页面
    { path: '/city/:cityid', component: city },          //当前选择城市页面
    { path: '/msite', component: msite },        //所有商铺列表页面
    { path: '/search', component: search },        //搜索页面
    { path: '/food', component: food },        //特色商铺列表页面
    { path: '/login', component: login },        //登录注册页面
    // {path: '/msite',component: msite},        //所有商铺列表页面
    // {path: '/msite',component: msite},        //所有商铺列表页面
  ]
}]