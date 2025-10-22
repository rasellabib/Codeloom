window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("opacity-0");
  setTimeout(() => {
    loader.style.display = "none";
  }, 700); // fade duration অনুযায়ী
});
window.addEventListener("load", () => {
  const nav = document.getElementById("navbar");

  // small delay before expanding
  setTimeout(() => {
    nav.classList.add("nav-expanded");
  }, 500);
});

window.scrollTo({
  top: 0,
  behavior: "smooth",
});
