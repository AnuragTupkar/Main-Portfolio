
var tl =gsap.timeline();

tl.from("#box",{
    scale:20,

    
    delay:1.2
})


tl.to(".navbar #anurag, .nav-link, .navbar button",{
    y:20,
    
    duration: 1,
    stagger: 0.1,
    
    
})
gsap.from("#intro1,#intro2,  #intro3 ", {
    x:-1000,
    opacity:0,
    duration:1,
    delay:2.4
})
gsap.from("#tagline",{
    opacity:0,
    y:200,
    delay:4
})
gsap.from("#main-photo",{
    x:100,
    opacity: 0,
    duration: 0.8,
    delay:2
})