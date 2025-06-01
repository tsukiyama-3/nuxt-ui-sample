export const useCarousel = (carousel?) => {
  const activeIndex = ref(0)
  const images = [
    "https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662027/samples/MacBook_Air_-_1_nl9dag.png",
    "https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662021/samples/MacBook_Air_-_7_s975o7.png",
    "https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662020/samples/MacBook_Air_-_8_hfrbql.png",
    "https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662021/samples/MacBook_Air_-_9_i6pmsx.png",
    "https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662021/samples/MacBook_Air_-_10_ju8jyx.png",
    "https://res.cloudinary.com/dyoyv8djx/image/upload/v1748662021/samples/MacBook_Air_-_11_zrb5la.png",
  ]

  const select = (index: number) => {
    activeIndex.value = index;

    carousel?.value?.emblaApi?.scrollTo(index);
  }

  return { images, activeIndex, select }
}