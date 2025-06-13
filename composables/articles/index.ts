export const useArticles = async () => {
  const { locale } = useI18n();
  // console.log(`/api/articles/${locale.value}`)
  const { data } = await useFetch(`/api/articles/${locale.value}`, {
    default: () => null,
    transform: (response) => {
      return response.articles;
    },
  });

  return { articles: data };
};
