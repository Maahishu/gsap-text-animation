import { gsap } from "gsap/all";
// import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import {  ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

let tl = gsap.timeline();
tl.from('.alpha', {
    y:-500,
    color:'white',
    duration: 1,
    opacity:0,
    ease: "back"
  })
tl.from('.alpha-vision', {
    x:-500,
    color:'white',
    duration: 0.2,
    opacity:0,
    ease: "back"
  })
tl.from('.alpha-brand', {
    x:-500,
    color:'white',
    duration: 0.2,
    opacity:0,
    ease: "back"
  })
tl.from('.alpha-fashion', {
    x:-500,
    color:'white',
    duration: 0.2,
    opacity:0,
    ease: "back"
  })
tl.from('.alpha-contact', {
    x:-500,
    color:'white',
    duration: 0.2,
    opacity:0,
    ease: "back"
  })


gsap.from('.top1', {
    scrollTrigger:'.top1',
    y:-500,
    color:'white',
    duration: 0.2,
    opacity:0,
    ease: "back"
  })
 gsap.from('.top2', {
    scrollTrigger:'.top2',
    y:-500,
    color:'white',
    duration: 0.2,
    opacity:0,
    ease: "back"
  }) 
gsap.from('.top3', {
    scrollTrigger:'.top3',
    y:-500,
    color:'white',
    duration: 0.2,
    opacity:0,
    ease: "back"
  })
gsap.from('.top4', {
    scrollTrigger:'.top4',
    y:-500,
    color:'white',
    duration: 0.2,
    opacity:0,
    ease: "back"
  })
gsap.from('.top5', {
    scrollTrigger:'.top5',
    y:-500,
    color:'white',
    duration: 0.2,
    opacity:0,
    ease: "back"
  })
gsap.from('.top6', {
    scrollTrigger:'.top6',
    y:-500,
    color:'white',
    duration: 0.2,
    opacity:0,
    ease: "back"
  },1)
// gsap.from('.top7', {
//     scrollTrigger:'.top7',
//     x:500,
//     color:'white',
//     duration: 0.5,
//     opacity:0,
//     ease: "back"
//   },1)


gsap.from('.mid1', {
    scrollTrigger:'.mid1',
    duration:1,
    x:-500,
    color:'black',
})


gsap.from('.mid2', {
    scrollTrigger:'.mid2',
    duration:1.5,
    x :420,
    color:'black',
})

gsap.from('.bot1', {
    scrollTrigger:'.bot1',
    duration:0.5,
    x :-500,
    color:'black',
})
gsap.from('.bot2', {
    scrollTrigger:'.bot2',
    duration:0.5,
    x :500,
    color:'black',
})
gsap.from('.bot3', {
    scrollTrigger:'.bot3',
    duration:0.5,
    x :500,
    color:'black',
})
