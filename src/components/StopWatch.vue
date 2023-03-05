<script setup lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

let is_active = ref<boolean>(false);
let start_time: number = 0;
let timer: number = 0;
let interval = ref<number>(0);
let sum_time: number = 0;

const start_timer = () => {
    is_active.value = true;
    start_time = Date.now();
    const update_time = () => {
        interval.value = sum_time + (Date.now() - start_time) * 0.001;
    };
    timer = setInterval(update_time, 10);
};

const stop_timer = () => {
    is_active.value = false;
    sum_time = interval.value;
    clearInterval(timer);
};

const clear_timer = () => {
    interval.value = 0;
    sum_time = 0;
    start_time = Date.now();
};

</script>

<template>
    <div class="header">
        <h1>ストップウォッチ</h1>
    </div>
    <div class="main">
        <div class="timer">
            {{ interval.toFixed(2) }}
        </div>
        <div class="button-list">
            <button @click="start_timer()" v-show="!is_active">START</button>
            <button @click="stop_timer()" v-show="is_active">STOP</button>
            <button>WRAP</button>
            <button @click="clear_timer()">CLEAR</button>
        </div>
    </div>
</template>

<style scoped>
</style>