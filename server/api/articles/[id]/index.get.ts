import { z } from 'zod'
import { getArticle } from '~/server/domains/repositories/articles'
import { validateArticleQuery } from '~/server/domains/models/articles'

const routerParams = z.object({
  id: z.string(),
})

export default defineCachedEventHandler(
  async (event) => {
    const { id } = await getValidatedRouterParams(event, routerParams.parse)
    try {
      const query = await getValidatedQuery(event, validateArticleQuery)
      const result = getArticle(id, query)
      return result
    } catch (error) {
      throw error
    }
  },
  {
    maxAge: 0,
  },
)
