export default defineNuxtRouteMiddleware((to, from) => { 
    console.log(to.path);
    console.log(from.path);
});