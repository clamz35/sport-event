import { createRouter, createWebHistory } from 'vue-router';

type HomeViewType = typeof import('../views/HomeView.vue');
type CreateGroupViewType = typeof import('../views/CreateGroupView.vue');
type CreateEventViewType = typeof import('../views/CreateEventView.vue');
type EventViewType = typeof import('../views/EventView.vue');

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
      name: 'groupCreate',
      component: (): Promise<CreateGroupViewType> => import('../views/CreateGroupView.vue'),
    },
    {
      path: '/group/:id',
      name: 'groupView',
      component: (): Promise<CreateGroupViewType> => import('../views/GroupView.vue'),
    },
    {
      path: '/event/create',
      name: 'eventCreate',
      component: (): Promise<CreateEventViewType> => import('../views/CreateEventView.vue'),
    },
    {
      path: '/event/:id',
      name: 'eventView',
      component: (): Promise<EventViewType> => import('../views/EventView.vue'),
    },
  ],
});

export default router;
