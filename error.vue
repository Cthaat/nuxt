<template>
    <div>
        <h1>Error Page</h1>
        {{ error.statusCode }}
        {{ error.message }}
    </div>
</template>

<script setup lang="ts">
defineProps({
    error: {
        type: Object,
        required: true
    }
});
</script>