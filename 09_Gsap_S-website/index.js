var time = gsap.timeline()
time.from("#nav", {
    opacity: 0,
    delay: 0.3,
})
time.from("#nav h1 ,#nav h4 ,#nav h3", {
    x: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.2,

})
time.from("#left h1 , #left hr , #left p, #left h3", {
    x: -500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})
time.from("#right img", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
})

gsap.from("#page-2 .box-1,#page-2 .box-2,#page-2 .box-3", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#page-2 .box-1,box-2,box-3",
        scroller: "body",
        stagger: 0.3,
        markers: "true",
        start: "top 70%",



    }

})