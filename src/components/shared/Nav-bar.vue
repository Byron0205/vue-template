<template>
  <nav class="bg-primary text-lg text-base-100 p-2 flex items-center justify-between">
    <div>
      <RouterLink to="/" class="p-2">{{ $t('Navbar.home') }}</RouterLink>
      <RouterLink to="/about" class="p-2">{{ $t('Navbar.about') }}</RouterLink>
    </div>
    <div class="flex items-center justify-end gap-4">
      <ThemeSelector />
      <Lang-selector />
    </div>
  </nav>
</template>

<script setup lang="ts">
import ThemeSelector from '@/components/shared/Theme-selector.vue'
import LangSelector from '@/components/shared/Lang-selector.vue'
</script>
