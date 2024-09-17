import { createRouter, createWebHistory } from 'vue-router';
import ScanPage from './views/scanpage/ScanPage.vue';
import ListGuest from './views/guest/ListGuest.vue';

const routes = [
  {
    path: '/',
    name: 'ScanPage',
    component: ScanPage,
  },
  {
    path: '/list',
    name: 'ListGuest',
    component: ListGuest,
  }
];

export const router = createRouter({
  history: createWebHistory('/'),
  routes
})
