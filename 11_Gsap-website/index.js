var time = gsap.timeline()
time.from("#nav h1", {
    y: -60,
    duration: 1,
    delay: 1,
    opacity: 0,
    // repeat:3,
    yono: "true",
    stagger: 0.4,

})
time.to("#nav h1", {
    x: 10,

})
time.from(" #nav #part2 a", {
    y: -70,
    duration: 1,
    delay: 0.3,
    stagger: 0.4,
    opacity: 0
})