<script setup lang="ts">
import Home from './components/Home.vue'
import Avatar from './components/Avatar.vue'
</script>

<template>
  <v-app>
    <Avatar />
    <Home />
    <router-view />
  </v-app>
</template>


