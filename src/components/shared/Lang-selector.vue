<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale } = useI18n()
const showDropdown = ref(false)

function changeLang(lang: string) {
  locale.value = lang
}
</script>

<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        type="button"
        class="w-full justify-center rounded bg-secondary hover:bg-secondary/90 py-2 px-5 text-primary shadow-sm"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        @click="showDropdown = !showDropdown"
      >
        {{ locale }}
      </button>
    </div>

    <div
      v-show="showDropdown"
      class="absolute right-0 z-10 mt-4 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-base-100 dark:bg-neutral shadow-lg ring-1 ring-primary focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <button
          type="button"
          class="block px-4 py-2 text-sm w-full text-neutral dark:text-base-100 text-left"
          role="menuitem"
          id="menu-item-0"
          @click="changeLang('en')"
        >
          EN
        </button>
        <button
          type="button"
          class="block px-4 py-2 text-sm w-full text-neutral dark:text-base-100 text-left"
          role="menuitem"
          id="menu-item-1"
          @click="changeLang('es')"
        >
          ES
        </button>
      </div>
    </div>
  </div>
</template>
