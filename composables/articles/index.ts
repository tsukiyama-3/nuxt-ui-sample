export const useArticles = async () => {
  const { locale } = useI18n()
  const fetchOption = reactive({
    query: { offset: 0, limit: 1, locale: locale.value },
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
  // TODO: fetchOptionで渡せばエンドポイントで言語選択しなくて済む
  const { data } = await useFetch(`/api/articles/${id}/${locale.value === 'en' ? locale.value : ''}`, {
    default: () => null,
    transform: (response) => {
      return response.article
    }
  })

  return { article: data.value }
}