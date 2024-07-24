<template>
    <div>
        <button @click="countStore.addCount">add</button>
        <button @click="countStore.subCount">subtract</button>
        <p>{{ countStore.count }}</p>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter';
const countStore = useCounterStore();
</script>