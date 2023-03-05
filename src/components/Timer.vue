<script setup lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

let is_start_show = ref<boolean>(true);
let is_stop_show = ref<boolean>(false);
let is_cancel_show = ref<boolean>(false);
let is_timer_show = ref<boolean>(false);
let hour: number = 0;
let minute: number = 0;
let second: number = 0;
let hour_str = ref<string>('00');
let minute_str = ref<string>('00');
let second_str = ref<string>('00');
let timer: number = 0;
let sum_seconds: number = 0;
let current_sum_seconds: number = 0;
let progress_rate = ref<number>(0);

const init_value = () => {
    // 値初期化
    progress_rate.value = 0;
    hour = 0;
    minute = 0;
    second = 0;
    is_start_show.value = true;
    is_stop_show.value = false;
    is_cancel_show.value = false;
    is_timer_show.value = false;
}

const cancel_timer = () => {
    // 終了
    clearInterval(timer);
    init_value();
}

const stop_timer = () => {
    // 停止
    clearInterval(timer);
    is_start_show.value = true;
    is_stop_show.value = false;
}

const audio = new Audio('src/assets/bird.mp3');
const play_audio = () => {
    audio.play();
    setTimeout(() => audio.pause(), 2000);
}

const update_rate = () => {
    // 進捗率更新
    current_sum_seconds = hour * 60 * 60 + minute * 60 + second;
    progress_rate.value = Math.round(current_sum_seconds / sum_seconds * 100);
    progress_rate.value = 100 - progress_rate.value;
}

const start_timer = () => {
    if (!is_cancel_show.value) {
        sum_seconds = hour * 60 * 60 + minute * 60 + second;
    }
    
    is_start_show.value = false;
    is_stop_show.value = true;
    is_cancel_show.value = true;
    is_timer_show.value = true;

    const update_str_value = () => {
        // 表示値更新
        second_str.value = ('00' + String(second)).slice(-2);
        minute_str.value = ('00' + String(minute)).slice(-2);
        hour_str.value = ('00' + String(hour)).slice(-2);
    }
    update_str_value();    

    const update_time = () => {
        if (second < 1 && minute < 1 && hour < 1) {
            // 終了
            clearInterval(timer);
            play_audio();
            setTimeout(() => init_value(), 2000);
        }
        else if (second < 1 && minute < 1 && hour >= 1) {
            // 0秒且つ0分
            second = 59;
            minute = 59;
            hour = hour -1;
            update_str_value();
            update_rate();
        }
        else if (second < 1 && minute >= 1) {
            // 0秒
            second = 59;
            minute = minute -1;
            update_str_value();
            update_rate();
        }
        else if (0 < second && second <= 59) {
            // 1秒ずつ減らす
            second = second - 1;
            update_str_value();
            update_rate();
        }        
    };
    timer = setInterval(update_time, 1000);
};

</script>

<template>
    <div class="text-center">
        <h1>タイマー</h1>
    </div>
    <div class="text-center">
        <div class="timer" v-show="!is_timer_show">
            <input type="number" v-model="hour">時間
            <input type="number" v-model="minute">分
            <input type="number" v-model="second">秒
        </div>
        <div v-show="is_timer_show">
            {{ hour_str }}:{{ minute_str }}:{{ second_str }}
        </div>
        <div>
            <v-btn @click="start_timer()" v-show="is_start_show">START</v-btn>
            <v-btn @click="stop_timer()" v-show="is_stop_show">STOP</v-btn>
            <v-btn @click="cancel_timer()" v-show="is_cancel_show">CANCEL</v-btn>
        </div>
        <div>
            <v-progress-circular
                :rotate="360"
                :size="100"
                :width="15"
                :model-value="progress_rate"
                color="teal"
            >
                {{ progress_rate }} %
            </v-progress-circular>
        </div>
    </div>
</template>

<style scoped>
</style>