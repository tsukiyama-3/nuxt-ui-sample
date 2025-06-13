export const useArticles = async () => {
  const { locale } = useI18n()
  const { data } = await useFetch(`/api/articles/${locale.value}`, {
    default: () => null,
    transform: (response) => {
      return response.articles
    },
  })

  return { articles: data }
}

export const useSample = async () => {
  const { data } = await useFetch('/api/translate')

  return { data }
}
