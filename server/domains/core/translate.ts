// これ必要ないかも

import { TranslationServiceClient } from '@google-cloud/translate'

const config = useRuntimeConfig();
const translationClient = new TranslationServiceClient({
  keyFilename: config.googleApplicationCredentials
});
const projectId = 'massive-marker-416907';
const location = 'global';

// 文字列の HTML を翻訳して返す
export const translateHTML = async (html: string) => {
  // ひとまず、日本語から英語だけ
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [html],
    mimeType: 'text/html',
    sourceLanguageCode: 'ja',
    targetLanguageCode: 'en',
  }
  try {
    const [{ translations }] = await translationClient.translateText(request)
    if (!translations || translations.length === 0 || !translations[0].translatedText) {
      throw new Error('翻訳結果が空です')
    }
    return translations[0].translatedText
  } catch(error) {
    console.error('翻訳に失敗しました', error)
    // 失敗したらHTMLをそのまま返す
    return html
  }
}

// 文字列を翻訳して返す
export const translateText = async (text: string) => {
  // ひとまず、日本語から英語だけ
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [text],
    mimeType: 'text/plain',
    sourceLanguageCode: 'ja',
    targetLanguageCode: 'en',
  }
  try {
    const [{ translations }] = await translationClient.translateText(request)
    if (!translations || translations.length === 0 || !translations[0].translatedText) {
      throw new Error('翻訳結果が空です')
    }
    return translations[0].translatedText
  } catch(error) {
    console.error('翻訳に失敗しました', error)
    // 失敗したら文字列をそのまま返す
    return text
  }
}
