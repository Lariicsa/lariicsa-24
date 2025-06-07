<template>
  <div role="switch" :aria-checked="isDarkMode" @click="setDarkMode()" class="md:hover:cursor-pointer"
    :class="`${isDarkMode ? 'text-white' : 'text-gray-400'}`">
    <font-awesome-icon :icon="`${isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}`" class="w-full h-auto" />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(JSON.parse(localStorage.getItem('darkmode') ?? 'false'))

const applyClass = () => {
  const elem = document.firstElementChild
  elem.className = isDarkMode.value ? 'dark' : 'nodark'
}


function setDarkMode() {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkmode', JSON.stringify(isDarkMode.value))
  applyClass()
}

onMounted(applyClass)
</script>