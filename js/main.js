gsap.registerPlugin(ScrollTrigger);
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.5,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper__next',
    prevEl: '.swiper__prev',
  },

});



let tlHeader = gsap.timeline();
tlHeader.from(
  '.title', {
  xPercent: -100,
  duration: 1
}, .4)
  .from(
    '.block-on-cup', {
    y: -100,
    opacity: 0,
    duration: .5,
  })
  .from(
    '#cup', {
    yPercent: 100,
    opacity: 0,
    duration: .4,
  })
  .from(

    '.btn-header', {
    yPercent: 100,
    opacity: 0,
    duration: 1,
  })
  .from(
    '.a-header', {
    y: 70,
    opacity: 0,
    duration: 1,
  }, .4)
  .from(
    '.h2-header', {
    y: 100,
    opacity: 0,
    duration: .9,
  }, .8)
const tlMessageBtn = gsap.timeline({ defaults: { duration: .2 }, repeat: -1, repeatDelay: 3 });
tlMessageBtn
  .to('#cup', { rotate: 5 })
  .to('#cup', { rotate: -5 })
  .to('#cup', { rotate: 5 })
  .to('#cup', { rotate: 0 });
//scroll
let tl = gsap.timeline();

tl.from('.h1-explore', {
  scrollTrigger: {
    trigger: '#explore-us-section',
    start: 'top center',
    end: '+=300',
    scrub: 2,
  },
  scale: 0,
})
  .from('.h2-explore', {
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
      start: 'top center',
      end: '+=750',
      scrub: 2,

    },
    yPercent: 200,
    stagger: 0.3,
  })
  .from('#explore-us-section', {
    scrollTrigger: {
      trigger: '#explore-us-section',
      start: 'top top',
      scrub: 2,
    },
  })

  .from('.text-content', {
    scrollTrigger: {
      trigger: '#order-coffee',
      start: 'center bottom',
      end: '+=400',
      scrub: 3,
    },
    xPercent: 200,
    opacity: 0
  })
  .from('#order-coffee-cup', {
    scrollTrigger: {
      trigger: '#order-coffee',
      start: 'center bottom',
      end: '+=150',
      scrub: 2,
    },
    yPercent: 50,
    opacity: 0,
  })
  .from('#order-now-btn', {
    scrollTrigger: {
      trigger: '#order-coffee-content',
      start: 'top center',
      end: '+=100',
      scrub: 1,
    },
    y: 50,
    opacity: 0,
  })
  .from('#best-selling-title', {
    scrollTrigger: {
      trigger: '#best-selling',
      start: '-200px center',
      end: '+=150',
      scrub: 1,
    },
    y: 150,
    opacity: 0,
  })
  .from('#best-selling-subtitle', {
    scrollTrigger: {

      trigger: '#best-selling',
      start: '-100px center',
      end: '+=250',
      scrub: 2,
    },
    y: 120,
    opacity: 0,
  })
  .from('#card-explore-best-sell', {
    scrollTrigger: {

      trigger: '#best-selling',
      start: '20% center',
      end: '+=200',
      scrub: 2,
    },
    opacity: 0,
    scale: 0,
    stagger: .3
  })
  .from('#mobile-app-text', {
    scrollTrigger: {

      trigger: '#mobile-app',
      start: '-200px center',
      end: '+=300',
      scrub: 1,
    },
    opacity: 0,
    y: 150,
    stagger: .1
  })


