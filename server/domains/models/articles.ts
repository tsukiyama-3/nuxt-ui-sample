import { TranslationServiceClient } from '@google-cloud/translate'
import { z } from 'zod/v4'
import type { Article as MicroCMSArticle } from '~/server/infrastructures/microcms/articles'

const config = useRuntimeConfig();
const translationClient = new TranslationServiceClient({
  keyFilename: config.googleApplicationCredentials
});
const projectId = 'massive-marker-416907';
const location = 'global';

const articleSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  contents: z.string(),
  image: z.url(),
  date: z.date(),
})

type Article = z.infer<typeof articleSchema>

// micro cms のレスポンスをドメインモデルへ変換する
export const convert = (article: MicroCMSArticle): Article => {
  return {
    id: article.id,
    title: article.subject,
    description: article.description,
    contents: article.contents,
    image: article.image,
    date: article.date,
  }
}

// ドメインモデルを英語へ翻訳する
export const translate = async (article: Article): Promise<Article> => {
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [article.title, article.description, article.contents],
    mimeType: 'text/html', // contents に HTML を含むため text/html を使用
    sourceLanguageCode: 'ja',
    targetLanguageCode: 'en',
  }

  try {
    const [{ translations }] = await translationClient.translateText(request)

    if (!translations || translations.length < 3) {
      throw new Error('翻訳結果が不完全です')
    }

    return {
      ...article,
      title: translations[0].translatedText || article.title,
      description: translations[1].translatedText || article.description,
      contents: translations[2].translatedText || article.contents,
    }
  } catch (error) {
    console.error('翻訳に失敗しました', error)
    return article // 元のデータをそのまま返す
  }
}
