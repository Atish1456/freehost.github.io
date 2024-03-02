var time = gsap.timeline()
time.from("#nav h3", {
    y: -50,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3,
})
time.from("#main h1", {
    x: -550,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4
})

time.from("img", {
    x: 100,
    rotete: 45,
    opacity: 0,
    duration: 0.6,
    stagger: 0.6
})