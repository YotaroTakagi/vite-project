<script setup lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { store } from '../store.ts'

let date = ref('');
const updateTime = () => {
    let current_date = new Date();

    date.value = current_date.getFullYear() + 
                '/' + ('0' + (current_date.getMonth() + 1)).slice(-2) + 
                '/' + ('0' + current_date.getDate()).slice(-2) + ' ' + 
                ('0' + current_date.getHours()).slice(-2) + ':' + 
                ('0' + current_date.getMinutes()).slice(-2);
};
onMounted( () => {
    updateTime();
});
setInterval(updateTime, 6000);
</script>

<template>
    <div>
        {{ date }}
    </div>
    <div>Count:{{ store.count }}</div>
</template>

<style scoped>

</style>