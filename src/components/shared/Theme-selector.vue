<template>
  <button @click="toggleTheme" class="bg-secondary text-primary p-2 rounded">
    <MoonIcon v-if="isDark" />
    <SunIcon v-else />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MoonIcon from '@/components/Icons/Moon-icon.vue'
import SunIcon from '@/components/Icons/Sun-icon.vue'

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
