var time = gsap.timeline()
time.from("#hr",{
    x: 0,
    duration: 2,
    delay: 0.2,
    opacity: 0,
    stagger: 0.5,
})
time.from("  #nav h3 ", {
    y: -50,
    duration: 1,
    delay: 0.3,
    opacity: 0,
    stagger: 0.6,
})
time.from("#d p", {
    x: -10,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    stagger: 0.8,
})

time.from("#main h1", {
    x: 200,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    stagger: 0.8,
})
time.from("#c p", {
    x: 100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.6,
})
time.from("#para p", {
    x: -100,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    stagger: 0.8,
    scale: 1,



})
time.from("#main h2", {
    x: -100,
    duration: 2,
    delay: 0.1,
    opacity: 0,
    stagger: 0.4,
})
time.from("#di", {
    x: 1,
    duration: 2,
    delay: 0.1,
    opacity: 0,
    stagger: 0.4,
})
time.from("#de", {
    x: 1,
    duration: 2,
    delay: 0.1,
    opacity: 0,
    stagger: 0.4,
})
time.from(("#paa p"), {
    x: -1,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.4,

})
time.from("#main h4", {
    x: 400,
    duration: 2,
    delay: 0.2,
    opacity: 0,
    stagger: 0.4,
})

time.from("#atish", {
    x: 1,
    duration: 2,
    rotate: 90,
    delay: 0.2,
    opacity: 0,
    stagger: 0.4,

})

time.from("#main h5", {
    x: 100,
    duration: 1,
    delay: 0.,
    opacity: 0,
    stagger: 0.7,
})


time.from("#ram", {
    x: 500,
    duration: 1,
    delay: 0.,
    opacity: 0,
    stagger: 0.7,
    repeat:3,
    yoyo:"true"




})
