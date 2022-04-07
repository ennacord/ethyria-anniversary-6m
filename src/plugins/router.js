import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewEnnaOpening from '../views/ViewEnnaOpening.vue'; // by alpha

// import '../alpha&mb_contributes/hideScrollbarOverriding.css'  //alpha;

import ViewEnnaHome from '../views/ViewEnnaHome.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/EnnaAlouette',
    name: 'ViewEnnaHome',
    component: ViewEnnaHome,
}, {
    path: '/',
    name: 'ViewEnnaOpening',
    component: ViewEnnaOpening,
}];

const router = new VueRouter({
    routes,
});

export default router;