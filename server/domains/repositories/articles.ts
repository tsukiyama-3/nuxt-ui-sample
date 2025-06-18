import { getArticles as getArticlesFromMicroCMS, getArticle as getArticleFromMicroCMS } from '~/server/infrastructures/microcms/articles'
import { convert, translate } from '~/server/domains/models/articles'

// ドメインモデルへ変換して返却
export const getArticles = async () => {
  const { contents } = await getArticlesFromMicroCMS()

  return { articles: contents.map(convert) }
}

// ドメインモデルへ変換して英語へ編訳して返却
export const getTranslatedArticles = async () => {
  const { contents } = await getArticlesFromMicroCMS()

  const converted = contents.map(convert)

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