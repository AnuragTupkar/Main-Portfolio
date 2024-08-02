
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
        // markers:true,
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
        // markers:true,
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
        // markers:true,
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
        // markers:true,
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
        // markers:true,
        start:"top 50%"
    }
})

//Portfolio Animation


gsap.from("#works-text",{
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#my-works #works-text",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})

gsap.from("#i-portfolio",{
    duration: 1,
    y: -20,
    scale:0,
    delay:1,
    ease: 'sine.inOut',
    scrollTrigger:{
        trigger:"#my-works #works-text",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})

gsap.from("#personal-text, #personal-para, #work-buttons",{
    duration: 1,
    opacity:0,
    stagger:2,
    delay:1,
    ease: 'sine.inOut',
    scrollTrigger:{
        trigger:"#my-works #works-text",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})

gsap.from("#techstack",{
    duration:1,
    y:200,
    scale: 0,
    opacity:0,
    stagger:2,
    delay:3.5,
    ease: 'sine.inOut',
    scrollTrigger:{
        trigger:"#my-works #works-text",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})

gsap.from("#tech-stack-container, #techstack-rectangle",{
    duration:1,
    y:200,
    scale: 0,
    opacity:0,
    stagger:2,
    delay:3.5,
    ease: 'sine.inOut',
    scrollTrigger:{
        trigger:"#my-works #works-text",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})

gsap.from("#getintouch-h",{
    duration:1,
    opacity:0,
    scale:0,
    
    ease: 'sine.inOut',
    scrollTrigger:{
        trigger:"#getintouch",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})

gsap.from("#getintouch-img",{
    duration:1,
    opacity:0,
    y:-200,
    delay:1,
    ease: 'sine.inOut',
    scrollTrigger:{
        trigger:"#getintouch",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})

gsap.from("#getintouch-para",{
    duration:1,
    opacity:0,
    x:200,
    delay:2,
    ease: 'sine.inOut',
    scrollTrigger:{
        trigger:"#getintouch",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})

gsap.from(".form-control",{
    duration:1,
    opacity:0,
    x:-200,
    delay:3,
    stagger:0.3,
    ease: 'sine.inOut',
    scrollTrigger:{
        trigger:"#getintouch",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})

gsap.from("#send-btn",{
    duration:1,
    opacity:0,
    x:-200,
    delay:4,
    
    ease: 'sine.inOut',
    scrollTrigger:{
        trigger:"#getintouch",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})

gsap.from("#socail-media-btn1 img",{
    duration:1,
    opacity:0,
    y:-200,
    delay:4,
    stagger:0.3,
    ease: 'sine.inOut',
    scrollTrigger:{
        trigger:"#getintouch",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})