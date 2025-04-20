import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ShoppingPage from '../views/ShoppingPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/shop',
    name: 'ShoppingPage',
    component: ShoppingPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
