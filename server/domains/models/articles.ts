import { TranslationServiceClient } from '@google-cloud/translate'
import { Window } from 'happy-dom'
import { z } from 'zod/v4'
import type { RawArticle as MicroCMSArticle } from '~/server/infrastructures/microcms/articles'

const config = useRuntimeConfig();
const translationClient = new TranslationServiceClient({
  keyFilename: config.googleApplicationCredentials
});
const projectId = 'massive-marker-416907';
const location = 'global';

const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  image: z.url(),
  date: z.date(),
})

type Article = z.infer<typeof articleSchema>

// micro cms のレスポンスをドメインモデルへ変換する
export const convert = (article: MicroCMSArticle): Article => {
  return {
    id: article.id,
    title: article.title,
    content: article.content,
    image: article.eyecatch.url,
    date: new Date(article.publishedAt),
  }
}

// ドメインモデルを英語へ翻訳する
export const translate = async (article: Article): Promise<Article> => {
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [article.title, article.content],
    mimeType: 'text/html',
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
      title: decode(translations[0].translatedText || article.title),
      content: translations[2].translatedText || article.content,
    }
  } catch (error) {
    console.error('翻訳に失敗しました', error)
    return article // 元のデータをそのまま返す
  }
}

// 翻訳テキストをデコードする
const decode = (contents: string) => {
  const window = new Window()
  try {
    const docs = new window.DOMParser().parseFromString(contents, 'text/html')
    return docs.documentElement.textContent || ''
  } catch(error) {
    console.error('デコードに失敗しました', error)
    return contents
  }
}
