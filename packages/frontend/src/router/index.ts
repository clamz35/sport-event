import { createRouter, createWebHistory } from 'vue-router';

type HomeViewType = typeof import('../views/HomeView.vue');
type CreateGroupViewType = typeof import('../views/CreateGroupView.vue');
type CreateEventViewType = typeof import('../views/CreateEventView.vue');

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
    {
      path: '/event/create',
      name: 'createEvent',
      component: (): Promise<CreateEventViewType> => import('../views/CreateEventView.vue'),
    },
  ],
});

export default router;
