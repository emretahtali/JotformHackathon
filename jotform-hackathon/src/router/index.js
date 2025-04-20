import { createRouter, createWebHistory } from 'vue-router';
import ShoppingPage from '../views/ShoppingPage.vue';
import CartPage from '../views/CartPage.vue';

const routes = [
  {
    path: '/',
    name: 'ShoppingPage',
    component: ShoppingPage
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
