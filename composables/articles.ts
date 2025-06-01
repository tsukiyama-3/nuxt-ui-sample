export const useArticles = () => {
  const posts = ref([
    {
      title: "年末年始の休業日のお知らせ",
      description: "Discover Nuxt Icon v1!",
      image:
        "https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662027/samples/MacBook_Air_-_1_nl9dag.png",
      date: "2024年12月25日",
      class: "cursor-pointer",
      badge: "NEWS",
    },
    {
      title: "記事サンプル1",
      description: "記事サンプル1です。記事サンプル1です。",
      image:
        "https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662021/samples/MacBook_Air_-_7_s975o7.png",
      date: "2024年11月20日",
      class: "cursor-pointer",
      badge: {
        label: "NOTE",
      },
    },
    {
      title: "記事サンプル2",
      description: "記事サンプル2です。記事サンプル2です。",
      image:
        "https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662020/samples/MacBook_Air_-_8_hfrbql.png",
      date: "2024年10月12日",
      class: "cursor-pointer",
      badge: "NEWS",
    },
  ]);

  return { posts }
}