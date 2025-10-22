gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 0.8, // smoothness level (0.8–1.2 ভালো range)
  effects: true,
  normalizeScroll: true,
});
const nav = gsap.timeline();
nav.from(".nav-bar", {
  scale: 0,
  delay: 0.5,
  duration: 0.5,
  opacity: 0,
  ease: "back.out(1.7)",
});
