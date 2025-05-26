<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Docs',
    to: '/getting-started',
    active: route.path.startsWith('/getting-started'),
  },
  {
    label: 'Components',
    to: '/components',
    active: route.path.startsWith('/components'),
  },
  {
    label: 'Roadmap',
    to: '/roadmap',
  },
  {
    label: 'Figma',
    to: 'https://www.figma.com/community/file/1288455405058138934',
    target: '_blank',
  },
  {
    label: 'Releases',
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
    <UMain class="max-w-[832px] px-4 mx-auto">
      <slot />
    </UMain>
  </div>
</template>
