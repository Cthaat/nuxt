<template>
    <div>
        user
        <NuxtPage/>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
const route = useRoute();
onMounted(() => {
    if (route.path === '/user') {
      navigateTo('/user/123');
    }
});
</script>
`