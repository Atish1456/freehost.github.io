
var time = gsap.timeline()
time.from("#part1 h1", {
    y: -80,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3,
})

gsap.to("#part2 video", {
    width: "100%",
    delay: 1.5,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: false,
        start: "top 0",
        end: "top -90%",
        scrub: 3,
        pin: true

    }
})

time.from("#part3 h1", {
    y: 100,
    duration: 1,
    delay: 2,
    opacity: 0,
    stagger: 0.3

})