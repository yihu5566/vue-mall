import Vue from "vue";
import ViewRouter from "vue-router";

const Home = () => import('@/views/home/Home.vue');
const Cart = () => import('@/views/cart/Cart.vue');

const Category = () => import('@/views/category/Category.vue');

const Profile = ()=>import ('@/views/profile/Profile.vue') ;

Vue.use(ViewRouter);

const routes = [
    { path: "", redirect: "/home" },
    {path:"/home",component:Home},
    {path:"/profile",component:Profile},
    {path:"/cart",component:Cart},
    {path:"/category",component:Category},
]

export default new ViewRouter({
    routes,
  //history模式
  mode: "history",
});
