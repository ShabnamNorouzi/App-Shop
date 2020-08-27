import Vue from 'vue';
import Router from 'vue-router';
import App from './app.vue';
import routes from './routes';
import {
    BootstrapVue,
    IconsPlugin
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'



Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

function start() {
    Vue.use(Router);

    const router = new Router({
        mode: 'history',
        routes
    });

    new Vue({
        el: '#app',
        router,
        render(createElement) {
            return createElement(App);
        }
    })
}

start();