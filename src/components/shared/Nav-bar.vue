<template>
  <nav class="bg-primary text-lg text-base-100 p-2 flex items-center justify-between">
    <div>
      <RouterLink to="/" class="p-2">Inicio</RouterLink>
      <RouterLink to="/about" class="p-2">about</RouterLink>
    </div>
    <div class="flex items-center justify-end gap-4">
      <button @click="toggleTheme" class="bg-secondary text-primary p-2 rounded">
        Toggle Theme
      </button>
      <span>Theme: {{ isDark ? 'Dark' : 'Light' }}</span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  }
}
</script>
