import { z } from 'zod/v4'
import { parseContentsResponse } from '~/server/infrastructures/microcms/core/contents'
import type { ContentsResponse } from '~/server/infrastructures/microcms/core/contents'

const rawArticleSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
  title: z.string(),
  content: z.string(),
  eyecatch: z.object({
    url: z.url(),
    height: z.number(),
    width: z.number(),
  }),
  category: z.object({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    publishedAt: z.string(),
    revisedAt: z.string(),
    name: z.string(),
  })
})

export type RawArticle = z.infer<typeof rawArticleSchema>

const querySchema = z.object({
  limit: z.number(),
  offset: z.number(),
}).partial()

type MicroCMSQuery = z.infer<typeof querySchema>

// microcms から取得した記事をバリデーションして返す
export const getArticles = async (query: MicroCMSQuery): Promise<ContentsResponse<RawArticle>> => {
  const { microcms } = useRuntimeConfig()
  const response = await $fetch(microcms.endpoints.blogs, {
    baseURL: microcms.baseUrl,
    headers: {
      'X-MICROCMS-API-KEY': microcms.apiKey
    },
    query,
  })

  return parseContentsResponse(response, rawArticleSchema)
}

// 単一の記事を返す
export const getArticle = async (id: string) => {
  const { microcms } = useRuntimeConfig()
  const response = await $fetch(`${microcms.endpoints.blogs}/${id}`, {
    baseURL: microcms.baseUrl,
    headers: {
      'X-MICROCMS-API-KEY': microcms.apiKey
    }
  })

  return { article: rawArticleSchema.parse(response) }
}
