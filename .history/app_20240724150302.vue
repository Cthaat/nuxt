<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
import { ref } from 'vue';
console.log('app.vue');
const count = ref(0);
</script>