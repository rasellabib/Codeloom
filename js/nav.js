const nav1 = document.getElementById("navbar");
const nav2 = document.getElementById("navbar2");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    // এখানে তুমি 300px বা 500px বসাতে পারো
    nav1.classList.remove("visible-nav");
    nav1.classList.add("hidden-nav");

    nav2.classList.remove("hidden-nav");
    nav2.classList.add("visible-nav");
  } else {
    nav1.classList.add("visible-nav");
    nav1.classList.remove("hidden-nav");

    nav2.classList.add("hidden-nav");
    nav2.classList.remove("visible-nav");
  }
});
