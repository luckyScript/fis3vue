/**
 * @file main module
 */
import Vue from 'vue';
import VueRouter from 'vue-router';


import configRouter from '../src/route/index';
import App from '../src/App.vue';

// open Vue to windows
window.Vue = Vue;


Vue.config.debug = true;

// use vue router
Vue.use(VueRouter);


// router
// create router
let router = new VueRouter({
});

// configure router

configRouter(router);


// boostrap the app
router.start(Vue.extend({App}), '#root');
// just for debugging
window.router = router;

