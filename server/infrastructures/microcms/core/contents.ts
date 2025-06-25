import { z } from 'zod/v4'

const rawContentsResponseSchema = z.object({
  contents: z.array(z.unknown()),
  totalCount: z.number(),
  offset: z.number(),
  limit: z.number(),
})

export type ContentsResponse<T> = {
  totalCount: number
  offset: number
  limit: number
  contents: T[]
}

const generateContentsResponse = <T extends z.ZodObject>(schema: T) => {
  return rawContentsResponseSchema.extend({
    contents: z.array(schema)
  })
}

export const parseContentsResponse = <T extends z.ZodObject>(
  input: unknown,
  schema: T
): z.infer<ReturnType<typeof generateContentsResponse<T>>> => {
  return generateContentsResponse(schema).parse(input)
}
