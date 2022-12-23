import { createRouter, createWebHistory } from 'vue-router';

type HomeViewType = typeof import('../views/HomeView.vue');
type CreateGroupViewType = typeof import('../views/CreateGroupView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: (): Promise<HomeViewType> => import('../views/HomeView.vue'),
    },
    {
      path: '/group/create',
      name: 'createGroup',
      component: (): Promise<CreateGroupViewType> => import('../views/CreateGroupView.vue'),
    },
    {
      path: '/group/:id',
      name: 'viewGroup',
      component: (): Promise<CreateGroupViewType> => import('../views/GroupView.vue'),
    },
  ],
});

export default router;
