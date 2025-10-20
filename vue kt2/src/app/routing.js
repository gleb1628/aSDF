import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../pages/WelcomePage.vue';
import AuthPage from '../pages/AuthPage.vue';
import UserListPage from '../pages/UserListPage.vue';
import AccountPage from '../pages/AccountPage.vue';
import { hasToken } from '../shared/lib/session.js';

const routes = [
  { path: '/', name: 'welcome', component: WelcomePage },
  { path: '/community', name: 'community', component: UserListPage },
  { path: '/signin', name: 'signin', component: AuthPage },
  {
    path: '/account',
    name: 'account',
    component: AccountPage,
    meta: { private: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const needsAuth = to.meta.private;
  const userHasToken = hasToken();

  if (needsAuth && !userHasToken) {
    next({ name: 'signin' });
  } else {
    next();
  }
});

export default router;