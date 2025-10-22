gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollSmoother create — wrapper has overflow:auto in CSS now
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1, // test with 1 (or 0.8) and adjust
  smoothTouch: 0.1,
  effects: true,
  normalizeScroll: true,
});

// hide loader and ensure page can scroll after load
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    // fade out visually (if you have transition) then remove/hide
    loader.classList.add("hidden"); // অথবা style.display = 'none'
    // ensure wrapper/html overflow is okay (if you changed via JS earlier)
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }
});
