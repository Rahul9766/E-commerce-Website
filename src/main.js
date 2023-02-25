import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import AccountPage from './components/AccountPage.vue'
import CartPage from './components/CartPage.vue'
// import homePage from './components/homePage.vue'
import IndexPage from './components/IndexPage.vue'
import ProductDetails from './components/ProductDetails.vue'
import ProductS from './components/ProductS.vue'
import ContactPage from './components/ContactPage.vue'
import CustomerData from './components/CustomerData.vue'
import loginData from './components/loginData.vue'



Vue.config.productionTip = false

Vue.use(VueRouter);

const routes=[
  {path:'/account', component:AccountPage},
  {path:'/contact', component:ContactPage},
  {path:'/cart', component:CartPage},
  // {path:'/home', component:homePage},
  {path:'/', component:IndexPage},
  {path:'/pdetails', component:ProductDetails},
  {path:'/products', component:ProductS},
  {path:'/CustomerData', component:CustomerData},
  {path:'/loginData', component:loginData},
]
 const router =new VueRouter({mode:'history',routes})
 
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
