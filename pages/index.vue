<template>
    <div>
        <v-btn @click="add">add</v-btn>
        <v-btn @click="countStore.subCount()">subtract</v-btn>
        <p>{{ countStore.count }}</p>
        <v-btn text="fetch" @click="() => console.log(data?.message)"/>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter';
const countStore = useCounterStore();
const add = () => {
    countStore.addCount();
    ElMessage.success('count add success');
};
useHead({
    title: 'Home',
    meta: [
        {
            name: 'description',
            content: 'This is a home page'
        }
    ]
});

const { data } = await useFetch('/api/hello', {
    method: 'POST',
    body: {
        name: 'Edge'
    },
    params: {
        id: 1
    }
});
</script>