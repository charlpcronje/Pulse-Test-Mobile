// src/router/index.ts - Iteration 1 - A+
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// Importing Register, Login, and User Profile components for routing
import RegisterPage from '@/views/register.vue';
import LoginPage from '@/views/login.vue';
import UserProfilePage from '@/views/UserProfilePage.vue'; // Assuming this exists

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/register' // Default route set to Register page
  },
  {
    path: '/register',
    component: RegisterPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/user-profile',
    component: UserProfilePage // Redirects to User Profile Page after login or registration
  },
  {
    path: '/send-notification',
    component: SendNotificationPage,
    name: 'SendNotification', // Optional: name the route
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
