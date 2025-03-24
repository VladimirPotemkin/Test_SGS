import { createRouter, createWebHistory } from 'vue-router';
import FormPage from '@/pages/FormPage/index.vue';
import DisplayPage from '@/pages/DisplayPage/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: FormPage },
    { path: '/display', component: DisplayPage }
  ]
});

export default router;