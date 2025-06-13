<script setup lang="ts">
import { ja, en } from "@nuxt/ui-pro/locale";
import { useForm } from "~/composables/form";
import { useArticles, useSample } from "~/composables/articles";

useHead({
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700;900&family=Roboto:wght@700&display=swap",
    },
  ],
});

const { locale, locales, setLocale } = useI18n();
const { model, schema, submit } = useForm();
const { articles } = await useArticles();

const { data } = await useSample()
</script>

<template>
  <UPage class="max-w-[832px] px-4 mx-auto">
    <UPageHeader
      title="Nuxt UI を使ったサンプルです"
      description="UPageHeader のディスクリプションはこんな感じです。"
      headline="ヘッドライン"
    />
    <USeparator />
    <p>{{ data }}</p>

    <!-- i18n -->
    <section class="py-8 space-y-4">
      <h2 class="text-2xl font-bold">i18n</h2>
      <ULocaleSelect v-model="locale" :locales="[ja, en]" class="w-48" />
      <div class="space-y-4">
        <p>{{ $t("welcome") }}</p>
      </div>
      <p>
        ULocaleSelect
        の挙動がおかしいので自前で言語セレクタを実装した方が良さそう。<br />
        Nuxt UI Pro はオープンソースじゃないので原因がわからない。
      </p>
      <div class="flex gap-x-4">
        <UButton
          v-for="(locale, index) in locales"
          :key="index"
          :label="locale.name"
          @click="setLocale(locale.code)"
          class="cursor-pointer"
        />
      </div>
      <h3 class="text-xl font-bold">APIレスポンス</h3>
      <p>{{ articles }}</p>
    </section>

    <!-- modal -->
    <section class="py-8 space-y-4">
      <h2 class="text-2xl font-bold">Modal</h2>
      <UModal
        title="Modal with description"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        :close="{
          class: 'cursor-pointer',
        }"
      >
        <UButton label="開く" variant="subtle" class="cursor-pointer" />
        <template #body>
          <div class="h-48 m-4" />
        </template>
      </UModal>
    </section>

    <!-- form -->
    <section class="py-8 space-y-4">
      <h2 class="text-2xl font-bold">Form</h2>
      <UForm :schema="schema" :state="model" class="space-y-4" @submit="submit">
        <UFormField label="メールアドレス" name="email" required>
          <UInput v-model="model.email" type="email" />
        </UFormField>

        <UFormField label="パスワード" name="password" required>
          <UInput v-model="model.password" type="password" />
        </UFormField>

        <UButton type="submit" class="font-bold cursor-pointer"> 送信 </UButton>
      </UForm>
    </section>
  </UPage>
</template>
