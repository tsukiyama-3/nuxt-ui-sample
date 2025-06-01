<script setup lang="ts">
import { ja, en } from '@nuxt/ui/locale'
const { locale } = useI18n()
</script>

<template>
  <UPage class="max-w-[832px] px-4 mx-auto">
    <UPageHeader
      title="Nuxt UI を使ったサンプルです"
      description="UPageHeader のディスクリプションはこんな感じです。"
      headline="ヘッドライン"
    />
    <USeparator />

    <!-- i18n -->
    <section class="py-8 space-y-4">
      <h2 class="text-2xl font-bold">i18n</h2>
      <ULocaleSelect v-model="locale" :locales="[ja, en]" class="w-48" />
      <div class="space-y-4">
        <p>{{ $t('welcome') }}</p>
      </div>
    </section>

    <!-- modal -->
    <section class="py-8 space-y-4">
      <h2 class="text-2xl font-bold">modal</h2>
      <UModal
        title="Modal with description"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        :close="{
          class: 'cursor-pointer'
        }"
      >
        <UButton label="開く" color="neutral" variant="subtle" class="cursor-pointer" />
        <template #body>
          <div class="h-48 m-4" />
        </template>
      </UModal>
    </section>
  </UPage>
</template>
