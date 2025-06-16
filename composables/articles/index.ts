export const useArticles = async () => {
  const { locale } = useI18n()
  const { data } = await useFetch(`/api/articles/${locale.value === 'en' ? locale.value : ''}`, {
    default: () => null,
    transform: (response) => {
      return response.articles
    },
  })

  return { articles: data }
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