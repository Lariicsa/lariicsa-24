<template>
  <div aria-label="dark mode" @click="setDarkMode()">
    <font-awesome-icon icon="fas fa-moon" class="w-full h-auto" />
  </div>
</template>
<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false)

const setDarkMode = ()=>{
  isDarkMode.value = !isDarkMode.value
  localStorage.getItem()
}
</script>