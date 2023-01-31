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