// 仮の記事取得 API
export default defineEventHandler((event) => {
  return {
    articles: [
      {
        title: "Notice of year-end and New Year holidays",
        description: "Discover Nuxt Icon v1!",
        image:
          "https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662027/samples/MacBook_Air_-_1_nl9dag.png",
        date: "2024年12月25日",
        class: "cursor-pointer",
        badge: "NEWS",
      },
      {
        title: "Article Sample 1",
        description: "Article Sample 1. Article Sample 1.",
        image:
          "https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662021/samples/MacBook_Air_-_7_s975o7.png",
        date: "November 20, 2024",
        class: "cursor-pointer",
        badge: {
          label: "NOTE",
        },
      },
      {
        title: "Article Sample 2",
        description: "Article Sample 2. Article Sample 2.",
        image:
          "https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662020/samples/MacBook_Air_-_8_hfrbql.png",
        date: "October 12, 2024",
        class: "cursor-pointer",
        badge: "NEWS",
      },
    ],
  };
});
