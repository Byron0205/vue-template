<script setup lang="ts">
import NavBar from '@/components/shared/Nav-bar.vue'

import { RouterView } from 'vue-router'
import CustomFooter from './components/shared/Custom-Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">
    <Nav-bar />
    <RouterView class="flex-grow w-full" />
    <CustomFooter />
  </div>
</template>
