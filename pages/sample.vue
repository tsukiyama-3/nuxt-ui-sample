<script setup lang="ts">
import { useArticles } from '~/composables/articles'

const { articles } = await useArticles()

const { items} = useAccordion()

const carousel1 = useTemplateRef("carousel1");
const carousel2 = useTemplateRef("carousel2");
const { images: images1, activeIndex: activeIndex1, select: select1 } = useCarousel(carousel1)
const { images: images2, activeIndex: activeIndex2, select: select2 } = useCarousel(carousel2)
const { images: images3 } = useCarousel()

const hero = [
  {
    title: "TITLE 1",
    description: "テキストテキストテキスト",
    images: {
      sm: "https://picsum.photos/390/693?random=1",
      lg: "https://picsum.photos/1470/582?random=1",
    },
    url: "/",
  },
  {
    title: "TITLE 2",
    description: "テキストテキストテキスト",
    images: {
      sm: "https://picsum.photos/390/693?random=2",
      lg: "https://picsum.photos/1470/582?random=2",
    },
    url: "/sample",
  },
  {
    title: "TITLE 3",
    description: "テキストテキストテキスト",
    images: {
      sm: "https://picsum.photos/390/693?random=3",
      lg: "https://picsum.photos/1470/582?random=3",
    },
    url: "/hoge",
  },
];
</script>

<template>
  <UPage>
    <section>
      <UCarousel
        :items="hero"
        dots
        loop
        :ui="{
          item: 'basis-1/1',
          controls: 'absolute bottom-4 inset-x-12',
          dots: '-top-7',
          dot: 'size-2',
        }"
        class="w-full mx-auto"
      >
        <template #default="{ item }">
          <div
            :style="{
              '--bg-sm': `url(${item.images.sm})`,
              '--bg-lg': `url(${item.images.lg})`,
            }"
            class="custom-bg aspect-[9/16] sm:aspect-video bg-no-repeat bg-center flex space-y-8 flex-col items-center justify-center"
          >
            <hgroup
              class="w-fit p-4 aspect-square flex flex-col items-center justify-center bg-gray-800 opacity-80"
            >
              <p class="text-sm text-white">{{ item.description }}</p>
              <h1 class="text-lg font-bold text-white">{{ item.title }}</h1>
            </hgroup>
            <UButton
              trailing-icon="i-lucide-chevron-right"
              size="xl"
              color="neutral"
              variant="outline"
              class="cursor-pointer rounded-none font-bold"
            >
              予約する
            </UButton>
          </div>
        </template>
      </UCarousel>
    </section>

    <section class="py-10 sm:px-8 space-y-10">
      <h2 class="text-center text-2xl sm:text-4xl font-bold">NEWS</h2>
      <div v-if="articles">
        <div class="sm:hidden">
          <UBlogPost
            v-for="(post, index) in articles"
            :key="index"
            :title="post.title"
            :description="post.description"
            :badge="post.badge"
            class="rounded-none"
          />
        </div>
        <UBlogPosts class="hidden sm:grid" :posts="articles" />
      </div>
      <div class="text-center">
        <UButton
          trailing-icon="i-lucide-chevron-right"
          size="xl"
          color="neutral"
          variant="outline"
          class="cursor-pointer rounded-none"
        >
          すべてニュースを見る
        </UButton>
      </div>
    </section>

    <section class="max-w-[1200px] mx-auto">
      <USeparator />

      <!-- ABOUT -->
      <section class="py-10 space-y-10 max-w-[1200px] mx-auto">
        <h2 class="text-center text-2xl sm:text-4xl font-bold">ABOUT</h2>
        <div class="space-y-20">
          <div
            class="grid grid-cols-1 items-center px-8 sm:grid-cols-2 gap-y-8 gap-x-16"
          >
            <div class="grid grid-cols-4 sm:order-2 gap-x-4">
              <div class="bg-gray-500 h-[80px] w-full max-w-[120px]" />
              <div class="bg-gray-500 h-[80px] w-full max-w-[120px]" />
              <div class="bg-gray-500 h-[80px] w-full max-w-[120px]" />
              <div class="bg-gray-500 h-[80px] w-full max-w-[120px]" />
            </div>
            <div class="space-y-4 sm:order-1">
              <hgroup class="space-y-2">
                <p class="text-sm">
                  あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、
                </p>
                <h3 class="text-xl sm:text-3xl">
                  テキストテキストテキストテキストテキストテキスト
                </h3>
              </hgroup>
              <p>
                あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
              </p>
            </div>
          </div>
          <div>
            <UCarousel
              v-slot="{ item }"
              dots
              class="sm:hidden"
              loop
              :items="images1"
              :ui="{
                item: 'basis-1/1',
                controls: 'absolute bottom-4 inset-x-12',
                dots: '-top-7',
                dot: 'size-2',
              }"
            >
              <img
                :src="item"
                width="343"
                height="240"
                class="w-full aspect-video"
              />
            </UCarousel>
            <div class="hidden sm:grid grid-cols-3 gap-x-4">
              <img
                src="https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662027/samples/MacBook_Air_-_1_nl9dag.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662021/samples/MacBook_Air_-_7_s975o7.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662020/samples/MacBook_Air_-_8_hfrbql.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="text-center">
          <UButton
            trailing-icon="i-lucide-chevron-right"
            size="xl"
            color="neutral"
            variant="outline"
            class="cursor-pointer rounded-none"
          >
            ABOUTとは？
          </UButton>
        </div>
      </section>

      <USeparator />

      <!-- FACILITY＆PRICE -->
      <section class="py-10 sm:px-8 space-y-10 max-w-[1200px] mx-auto">
        <h2 class="text-center text-2xl sm:text-4xl font-bold">
          FACILITY＆PRICE
        </h2>
        <div class="space-y-16">
          <section class="sm:grid grid-cols-2 gap-x-10 space-y-8">
            <div>
              <UCarousel
                v-slot="{ item }"
                dots
                class="sm:hidden"
                loop
                :items="images2"
                :ui="{
                  item: 'basis-1/1',
                  controls: 'absolute bottom-4 inset-x-12',
                  dots: '-top-7',
                  dot: 'size-2',
                }"
              >
                <img
                  :src="item"
                  width="343"
                  height="240"
                  class="w-full aspect-video"
                />
              </UCarousel>
              <div class="hidden sm:block">
                <UCarousel
                  ref="carousel1"
                  v-slot="{ item }"
                  :items="images2"
                  loop
                  class="w-full max-w-xl mx-auto"
                  @select="select1"
                >
                  <img :src="item" width="768" height="404" class="" />
                </UCarousel>
                <div class="flex gap-1 justify-between pt-1 max-w-xl mx-auto">
                  <div
                    v-for="(item, index) in images2"
                    :key="index"
                    class="size-24 opacity-25 hover:opacity-100 transition-opacity"
                    :class="{ 'opacity-100': activeIndex1 === index }"
                    @click="select1(index)"
                  >
                    <img :src="item" width="120" height="44" class="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="px-8">
              <div class="pb-3 space-y-2 sm:pb-4">
                <h3 class="font-semibold text-lg sm:text-3xl">新宿店</h3>
                <p class="text-sm">〒111-1111 東京都新宿区1-1-1</p>
              </div>
              <USeparator />
              <div class="space-y-8 sm:space-y-4 pt-4 sm:pt-4">
                <div class="space-y-4">
                  <p class="text-sm sm:text-xl">202X年X月、新宿にOPEN</p>
                  <h4 class="text-xl font-bold sm:text-3xl">
                    テキストテキストテキストテキストテキスト
                  </h4>
                  <p>
                    あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
                  </p>
                </div>
                <div class="text-center">
                  <UButton
                    trailing-icon="i-lucide-chevron-right"
                    size="xl"
                    color="neutral"
                    variant="outline"
                    class="cursor-pointer rounded-none"
                  >
                    この施設の詳細を見る
                  </UButton>
                </div>
              </div>
            </div>
          </section>

          <section class="sm:grid grid-cols-2 gap-x-10 space-y-8">
            <div>
              <UCarousel
                v-slot="{ item }"
                dots
                class="sm:hidden"
                loop
                :items="images3"
                :ui="{
                  item: 'basis-1/1',
                  controls: 'absolute bottom-4 inset-x-12',
                  dots: '-top-7',
                  dot: 'size-2',
                }"
              >
                <img
                  :src="item"
                  width="343"
                  height="240"
                  class="w-full aspect-video"
                />
              </UCarousel>
              <div class="hidden sm:block">
                <UCarousel
                  ref="carousel2"
                  v-slot="{ item }"
                  :items="images3"
                  class="w-full max-w-xl mx-auto"
                  @select="select2"
                >
                  <img :src="item" width="768" height="404" class="" />
                </UCarousel>
                <div class="flex gap-1 justify-between pt-1 max-w-xl mx-auto">
                  <div
                    v-for="(item, index) in images3"
                    :key="index"
                    class="size-24 opacity-25 hover:opacity-100 transition-opacity"
                    :class="{ 'opacity-100': activeIndex2 === index }"
                    @click="select2(index)"
                  >
                    <img :src="item" width="120" height="44" class="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="px-8">
              <div class="pb-3 space-y-2 sm:pb-4">
                <h3 class="font-semibold text-lg sm:text-3xl">渋谷店</h3>
                <p class="text-sm">〒111-1111 東京都渋谷区1-1-1</p>
              </div>
              <USeparator />
              <div class="space-y-8 sm:space-y-4 pt-4 sm:pt-4">
                <div class="space-y-4">
                  <p class="text-sm sm:text-xl">202X年X月、渋谷にOPEN</p>
                  <h4 class="text-xl font-bold sm:text-3xl">
                    テキストテキストテキストテキストテキスト
                  </h4>
                  <p>
                    あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
                  </p>
                </div>
                <div class="text-center">
                  <UButton
                    trailing-icon="i-lucide-chevron-right"
                    size="xl"
                    color="neutral"
                    variant="outline"
                    class="cursor-pointer rounded-none"
                  >
                    この施設の詳細を見る
                  </UButton>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <USeparator />

      <!-- FAQ -->
      <section class="py-10 px-4 sm:px-8 space-y-10 max-w-[1200px] mx-auto">
        <h2 class="text-center text-2xl sm:text-4xl font-bold">FAQ</h2>
        <UAccordion :items="items" />
        <div class="text-center">
          <UButton
            trailing-icon="i-lucide-chevron-right"
            size="xl"
            color="neutral"
            variant="outline"
            class="cursor-pointer rounded-none"
          >
            FAQ一覧
          </UButton>
        </div>
      </section>
    </section>
  </UPage>
</template>

<style scoped>
.custom-bg {
  background-image: var(--bg-sm);
  background-size: cover;
}

@media (min-width: 640px) {
  .custom-bg {
    background-image: var(--bg-lg);
  }
}
</style>
