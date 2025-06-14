import { getArticles as getArticlesFromMicroCMS, getArticle as getArticleFromMicroCMS } from '~/server/infrastructures/microcms/articles'
import { convert, translate } from '~/server/domains/models/articles'

// ドメインモデルへ変換して返却
export const getArticles = () => {
  const { articles } = getArticlesFromMicroCMS()

  return { articles: articles.map(convert) }
}

// ドメインモデルへ変換して英語へ編訳して返却
export const getTranslatedArticles = async () => {
  const { articles } = getArticlesFromMicroCMS()

  const converted = articles.map(convert)

  const translated = await Promise.all(converted.map(translate))

  return { articles: translated }
}

export const getArticle = (id: string) => {
  const { article } = getArticleFromMicroCMS(id)

  return { article: convert(article) }
}

export const getTranslatedArticle = async (id: string) => {
  const { article } = getArticleFromMicroCMS(id)

  const converted = convert(article)

  const translated = await translate(converted)

  return { article: translated }
}