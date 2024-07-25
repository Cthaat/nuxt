export default defineNuxtRouteMiddleware((to) => { 
  if (to.path === '/user') {
    return navigateTo('/user/profile');
  }
});