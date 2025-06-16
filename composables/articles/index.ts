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

export const useMicroCMSArticle = async () => {
  const { data } = await useFetch('/api/v1/blogs', {
    baseURL: 'https://nuxtjs-boilerplate.microcms.io',
    headers: {
      'X-MICROCMS-API-KEY': 'mTSmKdElJ8QtRly3XhSVV6ohXUT0pwcSWXeH'
    }
  })

  return { data }
}
