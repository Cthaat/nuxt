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
const count2 = ref(0);
if (count.value === 0) {
  count.value = 1;
}
</script>