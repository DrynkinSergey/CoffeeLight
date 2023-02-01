const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.5,
  

    // Navigation arrows
    navigation: {
      nextEl: '.swiper__next',
      prevEl: '.swiper__prev',
    },
  
  });
const tl = gsap.timeline()
tl.from(
    '.title', {
    xPercent: -100,
    duration: 1
}
)
    .from(
        '#cup', {
        y: 100,
        opacity: 0,
        duration: 2,
        delay: .5
    }
    )

