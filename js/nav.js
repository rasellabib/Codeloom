document.addEventListener("scroll", function () {
  const linkSection = document.querySelector(".cl-link");
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  if (scrollPercent >= 3 && scrollPercent <= 85) {
    linkSection.classList.add("visible");
  } else {
    linkSection.classList.remove("visible");
  }
});
