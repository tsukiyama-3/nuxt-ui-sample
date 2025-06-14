<script setup lang="ts">
import { useArticle } from "~/composables/articles";

const route = useRoute();

const { locales, setLocale } = useI18n();
const { article } = await useArticle(String(route.params.id))
</script>

<template>
  <UPage class="max-w-[832px] px-4 mx-auto">
    <div class="flex gap-x-4">
        <UButton
          v-for="(locale, index) in locales"
          :key="index"
          :label="locale.name"
          @click="setLocale(locale.code)"
          class="cursor-pointer"
        />
      </div>
    <h1 class="font-bold text-3xl">{{ article.title }}</h1>
    <article v-html="article.contents"></article>
  </UPage>
</template>
