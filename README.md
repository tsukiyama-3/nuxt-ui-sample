# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
# nuxt-ui-sample

## Nuxt UI 所感

Tailwind CSS でスタイルを当てているため、スタイルの上書きは可能。
なので、コンポーネントのスタイルを大幅に変更できる。

一つのコンポーネントは粒度の小さい別の Nuxt UI のコンポーネントで構成されている(ことが多い)ため、既存のパーツで良いものが見つからない場合でも、自分で必要なコンポーネントを作成し、組み合わせることで柔軟に対応できる。

コンポーネント内の見出しタグ（hタグ）のレベルも変更可能なため、ページ内の構造を適切に設定でき、SEO的にも問題が生じにくい。
また、内部的にもセマンティックにマークアップされているので基本的なアクセビリティ対応をされている。

表示するデータをどのように管理するかは難しそう。
- テンプレート内に書くと煩雑になるので Composables をコンポーネントごとに作る必要がある。
- APIのレスポンスもそのまま使えない場合がありそうなのでconvert処理が必要。
