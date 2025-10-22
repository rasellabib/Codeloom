gsap.registerPlugin(ScrollTrigger);

const hero = gsap.timeline({});

hero.from(".hero-content, .hero-button", {
  y: 40,
  opacity: 0,
  stagger: 0,
  duration: 0.5,
});

const WhatIDo = gsap.timeline({
  scrollTrigger: {
    trigger: "#WhatIDo",
    scroller: "body",
    start: "top 60%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
WhatIDo.from(".WhatIDo-card", {
  y: 60,
  opacity: 0,
  duration: 0.5,
});
// =========our work section animation==========
const OurWork = gsap.timeline({
  scrollTrigger: {
    trigger: "#OurWork",
    scroller: "body",
    start: "top 60%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
OurWork.from(".OurWork-tite", {
  y: 60,
  opacity: 0,
  duration: 0.5,
});

gsap.utils.toArray(".WorkCard article").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      scroller: "body",
      start: "top 80%",
      toggleActions: "play none none reverse",
      // markers: true,
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.2,
  });
});

// ========About Us section animation==========

const AboutUs = gsap.timeline({
  scrollTrigger: {
    trigger: "#AboutUs",
    scroller: "body",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
AboutUs.from(".about-us-item", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
});

const Testimonial = gsap.timeline({
  scrollTrigger: {
    trigger: "#Testimonial",
    scroller: "body",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
Testimonial.from(".testimonial-card", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
});

const Faq = gsap.timeline({
  scrollTrigger: {
    trigger: "#Faq",
    scroller: "body",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
Faq.from(".accordion-item", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
});
const footerBig = gsap.timeline({
  scrollTrigger: {
    trigger: ".last-text",
    scroller: "body",
    start: "top 100%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

footerBig.from(".last-text", {
  y: 100,
  opacity: 0,
  stagger: 0,
  duration: 0.5,
});
