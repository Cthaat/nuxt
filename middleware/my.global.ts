export default defineNuxtRouteMiddleware((to) => { 
    console.log(to.path);
    if (to.path !== '/user/123') {
        return navigateTo('/user/123');
    }
});