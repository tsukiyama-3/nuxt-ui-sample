import { z } from 'zod'
import { getTranslatedArticle } from '~/server/domains/repositories/articles'

const routerParams = z.object({
  id: z.string(),
})

export default defineCachedEventHandler(
  async (event) => {
    const { id } = await getValidatedRouterParams(event, routerParams.parse)
    try {
      const result = getTranslatedArticle(id)
      return result
    } catch (error) {
      throw error
    }
  },
  {
    maxAge: 0,
  },
)
