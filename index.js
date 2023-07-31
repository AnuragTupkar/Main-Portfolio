
var tl =gsap.timeline();

tl.from("#box",{
    scale:8,

    
    delay:1.2
})


tl.from(".navbar #anurag, .nav-link, .navbar button",{
    
    y:-20,
    opacity:0,
    duration: 1,
    stagger: 0.1,
    delay:0.5
    
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
gsap.from("#about-text",{
    scale:4,
    x:100,
    y:200,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:"#about-page #about-text",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})
gsap.from("#name, #degree, #motive",{
    opacity:0,
    duration:1.5,
    delay:2.5,
    scrollTrigger:{
        trigger:"#about-page #about-text",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})
gsap.from("#buttons",{
    scale:0,
    duration:0.6,
    delay:3,
    scrollTrigger:{
        trigger:"#about-page #about-text",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})
gsap.from("#left-photo",{
    opacity:0,
    x:-80,
    duration:0.6,
    delay:3.5,
    scrollTrigger:{
        trigger:"#about-page #about-text",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})
gsap.from("#socail-media-btn img",{
    opacity:0,
    
    duration:1,
    
    stagger:0.4,
    delay:4,
    scrollTrigger:{
        trigger:"#about-page #about-text",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})

