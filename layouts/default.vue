<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'SAMPLE',
    to: '/sample',
    active: route.path.startsWith('/sample'),
  },
  {
    label: 'サービス一覧',
    to: '/fuga',
  },
  {
    label: '注文の流れ',
    to: '/hoge',
  },
  {
    label: 'ニュース',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank',
  },
])
</script>

<template>
  <div>
    <UHeader mode="modal">
      <template #title>
        Nuxt UI Sample
      </template>
      <UNavigationMenu
        lass="data-[orientation=vertical]:w-48"
        :items="items"
      />
      <template #right>
        <UColorModeButton />
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </template>
      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>
    <UMain>
      <slot />
    </UMain>
  </div>
</template>
