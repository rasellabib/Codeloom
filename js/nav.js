document.addEventListener("scroll", function () {
  const linkSection = document.querySelector(".cl-link");
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  if (scrollPercent >= 15 && scrollPercent <= 85) {
    linkSection.classList.add("visible");
  } else {
    linkSection.classList.remove("visible");
  }
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const pageContent = document.getElementById("pageContent");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("active");
  pageContent.classList.toggle("blurred");
});
