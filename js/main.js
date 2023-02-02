gsap.registerPlugin(ScrollTrigger);
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

gsap.from(
  '.title', {
  xPercent: -100,
  duration: 1
})
gsap.from(
  '.block-on-cup', {
  y: -100,
  opacity: 0,
  duration: 1,
  delay: 1.4
})
gsap.from(
  '#cup', {
  yPercent: 100,
  opacity: 0,
  duration: 1,
})
gsap.from(

  '.btn-header', {
  yPercent: 100,
  opacity: 0,
  duration: 1,
  delay: 1.5
})
gsap.from(
  '.a-header', {
  y: -200,
  opacity: 0,
  duration: 2,
  delay: 1.7
})
gsap.from(
  '.h2', {
  y: 100,
  opacity: 0,
  duration: .9,
  delay: 1.3
})

//scroll
let tl = gsap.timeline();

tl.from('.h1', {
  scrollTrigger: {
    trigger: '#explore-us-section',
    start: 'top center',
    end: '+=300',
    scrub: 2,
  },
  scale: 0,
})
  .from('.h2', {
    scrollTrigger: {
      trigger: '#explore-us-section',
      start: 'top center',
      end: '+=200',
      scrub: 2,
    },
    yPercent: 100
  })

  .from('#card-explore', {
    scrollTrigger: {
      trigger: '#explore-us-section',
      start: 'center center',
      scrub: 2,
      stagger: .3
    },
    xPercent: 400
  })
  .from('#explore-us-section', {
    scrollTrigger: {
      pin: true,
      trigger: '#explore-us-section',
      start: 'top top',
      scrub: 2,
    },
  })
  .to('#card-explore', {
    scrollTrigger: {
      trigger: '#explore-us-section',
      start: 'center center',
      pin: true,
      scrub: 1,
      stagger: 1.3
    },
    y: 100,
    opacity: 0
  })
  .from('.text-content', {
    scrollTrigger: {
      markers: true,
      trigger: '#order-coffee',
      start: 'center bottom',
      end: '+=450',
      scrub: 3,
    },
    xPercent: 200,
  })
