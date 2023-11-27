import {createRouter, createWebHistory} from "vue-router";
import HomePage from '../pages/HomePage.vue';

const router = createRouter({
 // aggiungi history
 history : createWebHistory(),
// aggiungi routes
 routes:[
    {
        name : 'home',
        path: '/',
        component: HomePage
    },
 ],
});

export {router}