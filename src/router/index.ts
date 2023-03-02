import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Blogs from '../views/Blogs.vue';
import Login from '../views/Login.vue';
import Registrar from '../views/Registrar.vue';
import Senha from '../views/Senha.vue';
import Perfil from '../views/Perfil.vue';
import Admin from '../views/Admin.vue';
import CriarPost from '../views/CriarPost.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'Home'
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    meta:{
      title:'Blogs'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title:'Login'
    }
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: Registrar,
    meta:{
      title:'Registrar'
    }
  },
  {
    path: '/senha',
    name: 'Senha',
    component: Senha,
    meta:{
      title:'Senha'
    }
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil,
    meta:{
      title:'Perfil'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta:{
      title:'Admin'
    }
  },
  {
    path: '/criar-post',
    name: 'CriarPost',
    component: CriarPost,
    meta:{
      title:'CriarPost'
    }
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next)=>{
  document.title = `${to.meta?.title} | PaginaBlog`;
  next();
})

export default router;
