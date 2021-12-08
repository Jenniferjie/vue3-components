<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
import { Input } from 'ui-component';
import { RiSearch2Line } from 'vue-remix-icons'

const val = ref('');
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <Input
    v-model="val"
    clearable
    show-word-limit
    maxlength="30"
    :prefix-icon="RiSearch2Line"
  >
    <template #prepend>
      <RiSearch2Line />
    </template>
    <template #append>
      <RiSearch2Line />
    </template>
  </Input>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

svg {
  width: 20px;
}
</style>
