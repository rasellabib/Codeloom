window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("opacity-0");
  setTimeout(() => {
    loader.style.display = "none";
  }, 700); // fade duration অনুযায়ী
});
window.addEventListener("load", () => {
  const nav = document.getElementById("navbar");
  const navBtn = document.getElementById("navBtn");
  const navLinks = document.getElementById("navLinks");
  // small delay before expanding

  setTimeout(() => {
    nav.classList.add("nav-expanded");
  }, 1000);
  setTimeout(() => {
    navBtn.classList.add("navItems-expanded");
    navLinks.classList.add("navItems-expanded");
  }, 1500);
});

window.scrollTo({
  top: 0,
  behavior: "smooth",
});
