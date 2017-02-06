
import Vue from 'vue';
// import Vuex from 'vuex';
import VueRouter from 'vue-router';
import routers from './router';
import App from './App';
// import FastClick from 'fastclick';
import store from './store';

// require('es6-promise').polyfill();
// require('isomorphic-fetch');
// Vue.use(Vuex);
Vue.use(VueRouter);
// 实例化VueRouter
const router = new VueRouter({
    // mode: 'history',
    // base:__dirname,
    routers
});
// FastClick.attach(document.body)

new Vue({
    router,
    store,
    render: h => h(App),
    el:'#app'
});