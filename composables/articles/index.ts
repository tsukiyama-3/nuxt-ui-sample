export const useArticles = async () => {
  const { locale } = useI18n()
  const fetchOption = reactive({
    query: { offset: 0, limit: 10, locale: locale.value },
    default: () => ({
      articles: [],
      totalCount: 0,
    })
  })
  const { data } = await useFetch('/api/articles', fetchOption)

  return { articles: computed(() => data.value.articles) }
}

export const useArticle = async (id: string) => {
  const { locale } = useI18n()
  const fetchOption = reactive({
    query: { locale: locale.value },
    default: () => null
  })
  const { data } = await useFetch(`/api/articles/${id}`, fetchOption)

  return { article: data.value }
}