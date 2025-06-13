import { TranslationServiceClient } from '@google-cloud/translate'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const translationClient = new TranslationServiceClient({
    keyFilename: config.googleApplicationCredentials
  });
  const projectId = 'massive-marker-416907';
  const location = 'global';
  const text = 'Hello, world!';
  const html = '<h1>こんにちは！</h1>'
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [html],
    mimeType: 'text/html', // mime types: text/plain, text/html
    sourceLanguageCode: 'ja',
    targetLanguageCode: 'en',
  };
  const [{ translations }] = await translationClient.translateText(request);

  return translations?.[0]?.translatedText;
})
