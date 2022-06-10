<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
import { Input } from '@jenniferjiajie/ui-component';
import { DatePicker } from '@jenniferjiajie/ui-component';
import { RiSearch2Line } from 'vue-remix-icons'

const val = ref('');
const monthVal = ref('');
const yearVal = ref('');
const dateVal = ref('');
</script>

<template>
  <div style="margin-bottom: 10px">
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
  </div>
  

  <div style="margin-bottom: 10px">
    <DatePicker v-model="monthVal" type="month" />
  </div>
  <div style="margin-bottom: 10px">
    <DatePicker clearable v-model="yearVal" type="year" />
  </div>
  <div style="margin-bottom: 10px">
    <DatePicker clearable v-model="dateVal" />
  </div>
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
