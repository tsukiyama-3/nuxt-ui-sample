import { getArticles as getArticlesFromMicroCMS, getArticle as getArticleFromMicroCMS } from '~/server/infrastructures/microcms/articles'
import { convert, translate } from '~/server/domains/models/articles'
import type { ArticleQuery } from '~/server/domains/models/articles'

// ドメインモデルへ変換して返却
export const getArticles = async (query: ArticleQuery) => {
  const { contents } = await getArticlesFromMicroCMS(query)

  const converted = contents.map(convert)

  // locale が en だったら翻訳後レスポンスを返す
  if (query.locale === 'en') {
    const translated = await Promise.all(converted.map(translate))
    return { articles: translated }
  }

  return { articles: converted }
}

export const getArticle = async (id: string, query: ArticleQuery) => {
  const { article } = await getArticleFromMicroCMS(id)

  const converted = convert(article)

  if (query.locale === 'en') {
    const translated = await translate(converted)
    return translated
  }

  return converted
}