import { getTranslatedArticles } from '~/server/domains/repositories/articles'

export default defineCachedEventHandler(
  async (event) => {
    try {
      const result = await getTranslatedArticles()
      return result
    } catch (error) {
      throw error
    }
  },
  {
    maxAge: 0,
  },
)
