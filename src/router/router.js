import App from '../App'
// 组件
const home = r => require.ensure([], () => r(require('@P/home/home')), 'home');
const city = r => require.ensure([], () => r(require('@P/city/city')), 'city');
const msite = r => require.ensure([], () => r(require('@P/msite/msite')), 'msite');
const search = r => require.ensure([], () => r(require('@P/search/search')), 'search');
const login = r => require.ensure([], () => r(require('@P/login/login')), 'login');
const food = r => require.ensure([], () => r(require('@P/food/food')), 'food');
const shop = r => require.ensure([], () => r(require('@P/shop/shop')), 'shop');
const profile = r => require.ensure([], () => r(require('@P/profile/profile')), 'profile');
const info = r => require.ensure([], () => r(require('@P/profile/children/info')), 'info');
const rating = r => require.ensure([], () => r(require('@P/shop/children/rating')), 'rating');
// import shop from '@P/shop/shop';


export default [{
  path: '',
  component: App,                             //顶级路由，对应index.html
  children: [                                 //二级路由  对应App.vue
    { path: '', redirect: '/home' },             //地址为空时跳转home页面
    { path: '/home', component: home },          //首页城市列表页面
    // 可以匹配 /city/ 和 /city/1
    { path: '/city/:cityid?', component: city },          //当前选择城市页面
    { path: '/msite', component: msite },        //所有商铺列表页面
    { path: '/search/:geohash?', component: search },        //搜索页面
    { path: '/food', component: food },        //特色商铺列表页面
    { //商铺详情页面
      path: '/shop', component: shop,
      children: [
        { path: 'rating', component: rating },    //评论页
      ]
    },
    { path: '/login', component: login },        //登录注册页
    {
      path: '/profile', component: profile,       //个人信息页
      children: [
        {
          path: 'info', component: info,      //个人信息详情页
          // children: [
          //   {
          //     path: 'address', component: address,    //编辑地址页
          //     children: [
          //       {
          //         path: 'add', component: add,
          //         children: [{ path: 'addDetail', component: addDetail }], //添加地址页
          //       }
          //     ]
          //   }
          // ]
        },
        // { path: 'setusername', component: setusername },
        // { path: 'service', component: service },    //服务中心
      ]
    },
  ]
}]