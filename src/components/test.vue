<script setup lang="ts">
import { ref } from 'vue'
import { store } from '../store.ts'

const count = ref(0);
</script>

<template>
    <div>Count:{{ store.count }}</div>
    <button @click="store.increment()">Add</button>
</template>

