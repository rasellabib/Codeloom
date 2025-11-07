gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);
gsap.registerPlugin(SplitText);

const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper", // the wrapper element
  content: "#smooth-content", // the content element inside wrapper
  smooth: 1, // the smoothness (1 = default)
  effects: true, // allows data-speed/data-lag effects on elements
});

const heroContent = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-content", // Element to watch
    start: "top 80%", // When top of element hits 80% of viewport
    toggleActions: "play none none reverse",
    // Options: play | pause | resume | reverse | restart | complete | reset | none
    markers: false, // Set to true to debug trigger positions
  },
});

heroContent.from(".hero-content", {
  y: -40,
  opacity: 0,
  duration: 1,
  delay: 2, // <-- Delay before animation starts
  stagger: 0.2, // if there are multiple .hero-button elements
  ease: "power2.out",
});

const hero = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-button",
    start: "top 80%",
    toggleActions: "play none none reverse",
    markers: false,
  },
});

hero.from(".hero-button", {
  y: 40,
  opacity: 0,
  duration: 0.5,
  delay: 2,
  stagger: 0.2,
  ease: "power2.out",
});

const WhatIDo = gsap.timeline({
  scrollTrigger: {
    trigger: ".WhatIDoTitle",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none none",
    // markers: true,
  },
});

WhatIDo.from(".WhatIDoTitle", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
});

// gsap.form('.single-service', {
//     scrollTrigger: {
//         trigger: '.service-wrap',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse',
//         markers: false,
//     },
//     y: 40,
//     opacity: 1,
//     duration: 0.6,
//     stagger: 0.3, // controls delay between each card
//     ease: 'power2.out',
// });

// =========our work section animation==========
const OurWork = gsap.timeline({
  scrollTrigger: {
    trigger: "#OurWork",
    scroller: "body",
    start: "top 60%",
    toggleActions: "play none none none",
    // markers: true,
  },
});
OurWork.from(".OurWork-tite", {
  y: 60,
  opacity: 0,
  duration: 0.5,
});

gsap.utils.toArray(".WorkCard .work-cards").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      scroller: "body",
      start: "top 80%",
      toggleActions: "play none none none",
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
    toggleActions: "play none none none",
    // markers: true,
  },
});
AboutUs.from(".about-us-item", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
});

// const Testimonial = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#Testimonial",
//     scroller: "body",
//     start: "top 70%",
//     toggleActions: "play none none none",
//     // markers: true,
//   },
// });
// Testimonial.from(".Testimonial-title ", {
//   y: 80,
//   opacity: 0,
//   duration: 0.5,
// });
// Testimonial.from(".testimonial-img, .testimonial-content", {
//   y: 100,
//   opacity: 0,
//   stagger: 0.2,
//   duration: 0.5,
// });
const FaqTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".FaqTitle",
    scroller: "body",
    start: "top 80%",
    toggleActions: "play none none none",
    // markers: true,
  },
});
FaqTitle.from(".FaqTitle", {
  y: 80,
  opacity: 0,
  duration: 0.5,
});
const Faq = gsap.timeline({
  scrollTrigger: {
    trigger: ".accordion-item",
    scroller: "body",
    start: "top 80%",
    toggleActions: "play none none none",
    // markers: true,
  },
});
Faq.from(".accordion-item", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
});
const FooterTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".FooterTitle",
    scroller: "body",
    start: "top 80%",
    toggleActions: "play none none none",
    // markers: true,
  },
});
FooterTitle.from(".FooterTitle", {
  y: 80,
  opacity: 0,
  stagger: 0.5,
  duration: 0.5,
});
// নিশ্চিত করুন ScrollTrigger রেজিস্টার করা আছে
gsap.registerPlugin(ScrollTrigger);

let footerBig; // টিমলাইন ধরে রাখতে

ScrollTrigger.matchMedia({
  // বড় স্ক্রীন (desktop)
  "(min-width: 1025px)": function () {
    // আগেরটা থাকলে পরিষ্কার করে নতুন বানাই
    if (footerBig && footerBig.scrollTrigger) {
      footerBig.scrollTrigger.kill();
      footerBig.kill();
    }

    footerBig = gsap.timeline({
      scrollTrigger: {
        trigger: ".last-text",
        scroller: "body",
        start: "top 100%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    footerBig.from(".last-text", {
      y: 100,
      delay: 0.4,
      opacity: 0,
      stagger: 0,
      duration: 0.7,
    });

    // cleanup function — matchMedia প্রয়োজন মত কল করবে
    return () => {
      if (footerBig && footerBig.scrollTrigger) {
        footerBig.scrollTrigger.kill();
        footerBig.kill();
      }
    };
  },

  // tablet এবং তার নিচে
  "(max-width: 1024px)": function () {
    if (footerBig && footerBig.scrollTrigger) {
      footerBig.scrollTrigger.kill();
      footerBig.kill();
    }

    footerBig = gsap.timeline({
      scrollTrigger: {
        trigger: ".last-text",
        scroller: "body",
        start: "top 100%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    footerBig.from(".last-text", {
      y: 100,
      delay: 0.4,
      opacity: 0,
      stagger: 0,
      duration: 0.7,
    });

    return () => {
      if (footerBig && footerBig.scrollTrigger) {
        footerBig.scrollTrigger.kill();
        footerBig.kill();
      }
    };
  },
});

// // নিশ্চিত করো GSAP ও ScrollTrigger রেজিস্টার করা আছে
// gsap.registerPlugin(ScrollTrigger);

// // Option A: নির্দিষ্ট ক্লাসগুলোর জন্য (তুমিই যেগুলো দিয়েছ)
// const footerSocial = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".footer-social",
//     scroller: "body",
//     start: "top 90%",
//     toggleActions: "play none none none",
//     // markers: true, // ডিবাগ করতে চাইলে আনকমেন্ট করো
//   },
// });

// footerSocial.from(".mail, .whatsapp, .linkedin", {
//   y: 40,
//   opacity: 0,
//   duration: 0.45,
//   ease: "power3.out",
//   stagger: 0.08, // 0.08 seconds = 80ms delay between each
// });
