const nav = gsap.timeline();
nav.from(".nav-bar", {
  scale: 0,
  delay: 0.5,
  duration: 0.5,
  opacity: 0,
  ease: "back.out(1.7)",
});
