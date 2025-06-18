import { getArticles } from '~/server/domains/repositories/articles'

export default defineCachedEventHandler(
  async (event) => {
    try {
      const result = await getArticles()
      return result
    } catch (error) {
      throw error
    }
  },
  {
    // maxAge: 0,
  },
)
