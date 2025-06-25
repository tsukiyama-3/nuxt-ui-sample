import { getArticles } from '~/server/domains/repositories/articles'
import { validateArticleQuery } from '~/server/domains/models/articles'

export default defineCachedEventHandler(
  async (event) => {
    try {
      const query = await getValidatedQuery(event, validateArticleQuery)
      const result = await getArticles(query)
      return result
    } catch (error) {
      throw error
    }
  },
  {
    // maxAge: 0,
  },
)
