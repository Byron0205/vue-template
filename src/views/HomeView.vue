<script setup lang="ts"></script>

<template>
  <main class="bg-base-100 dark:bg-neutral text-base-content dark:text-base-100">
    <div class="pt-4 mx-auto w-[90%]">
      <h1 class="text-2xl">{{ $t('HomeView.title') }}</h1>
      <p>{{ $t('HomeView.Hero') }}</p>
      <hr />
      <div class="mt-4">
        <p>{{ $t('app.title') }}</p>
        <p>{{ $t('app.welcome', { name: 'Byron' }) }}</p>
      </div>
    </div>
  </main>
</template>
