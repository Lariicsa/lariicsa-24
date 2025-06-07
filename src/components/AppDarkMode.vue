<template>
  <div aria-label="dark mode" @click="setDarkMode()" class="md:hover:cursor-pointer text-white">
    <font-awesome-icon icon="fas fa-moon" class="w-full h-auto" />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false)
const space = ref(document.querySelector('#app'))

onMounted(()=>{
  space.value
})

const setDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  const darkMode = localStorage.getItem('dm')
  if (darkMode === null || darkMode === 'nain') {
    localStorage.setItem('dm', 'yei')
    space.value.classList.add('dark')
  } else {
    localStorage.setItem('dm', 'nain')
    space.value.classList.remove('dark')
  }
}
</script>