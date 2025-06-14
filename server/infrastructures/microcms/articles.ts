import { z } from 'zod/v4'

const rawArticleSchema = z.object({
  id: z.number(),
  subject: z.string(),
  description: z.string(),
  contents: z.string(),
  image: z.url(),
  date: z.date(),
  badge: z.string(),
})

export type Article = z.infer<typeof rawArticleSchema>

// microcms から取得した記事をバリデーションして返す
export const getArticles = () => {
  // 仮の記事
  // どんなレスポンスが来るかわからないため、かなり適当
  const articles: Article[] = [
    {
      id: 1,
      subject: '年末年始の休業日のお知らせ',
      description: 'Discover Nuxt Icon v1!',
      contents: '<h2>年末年始の休業日のお知らせ</h2><p>平素は格別のご高配を賜り、誠にありがとうございます。</p><p>誠に勝手ながら、以下の期間を年末年始の休業日とさせていただきます。</p><ul><li>休業期間：2025年12月29日（月）～2026年1月4日（日）</li></ul><p>期間中にいただいたお問い合わせにつきましては、2026年1月6日（月）以降に順次対応させていただきます。</p><p>ご不便をおかけいたしますが、何卒ご理解のほどよろしくお願い申し上げます。</p>',
      image: 'https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662027/samples/MacBook_Air_-_1_nl9dag.png',
      date: new Date('2024-12-25'),
      badge: 'NEW'
    },
    {
      id: 2,
      subject: '記事サンプル1',
      description: '記事サンプル1です。記事サンプル1です。',
      contents: '<h2>記事サンプル1</h2><p>記事サンプル1です。記事サンプル1です。</p>',
      image: 'https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662021/samples/MacBook_Air_-_7_s975o7.png',
      date: new Date('2024-11-20'),
      badge: 'NEW'
    },
    {
      id: 3,
      subject: '記事サンプル2',
      description: '記事サンプル2です。記事サンプル2です。',
      contents: '<h2>記事サンプル2</h2><p>記事サンプル2です。記事サンプル2です。</p>',
      image: 'https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662020/samples/MacBook_Air_-_8_hfrbql.png',
      date: new Date('2024-10-12'),
      badge: 'NEW'
    }
  ]

  return { articles: articles.map((article) => rawArticleSchema.parse(article)) }
}
