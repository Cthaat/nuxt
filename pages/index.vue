<template>
    <div>
        <v-btn @click="add">add</v-btn>
        <v-btn @click="countStore.subCount">subtract</v-btn>
        <p>{{ countStore.count }}</p>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter';
const countStore = useCounterStore();
const add = () => {
    countStore.addCount();
    ElMessage.success('count add success');
};
</script>