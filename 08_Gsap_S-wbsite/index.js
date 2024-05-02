var time = gsap.timeline()


time.from("#nav img ,#nav h3 , #nav h4, #nav button", {
    x: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.5,
})
time.from("#main h1", {
    y: 100,
    opacity: 0,
    stagger: 1
})
time.from("#main #left,#main #right", {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 1,
})
time.from("#main #left-1", {
    y: 30,
    duration: 1,
    opacity: 0,
    stagger: 1,


})
time.from("#main #right-1", {
    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 1,

})
time.from("#ram", {
    x: 1300,
    scale: 2,
    duration:3,
    opacity: 0,
    repeat:-1,
    yoyo:"true"


  
})
time.from("#ram-1", {
    x: -1100,
    scale: 2,
    duration:3,
    opacity: 0,
    repeat:-1,
    yoyo:"true"


  
})