import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: () => import('../views/RsvpView.vue'),
    },
    {
      path: '/venue',
      name: 'venue',
      component: () => import('../views/VenueView.vue'),
    },
    {
      path: '/gifts',
      name: 'gifts',
      component: () => import('../views/GiftsView.vue'),
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/DetailsView.vue'),
    },
  ],
})

export default router
