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
// get elements
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const pageContent = document.getElementById("pageContent");
const smoothWrapper = document.getElementById("smooth-wrapper"); // তোমার smooth scroller wrapper
const mobileLinks = document.querySelectorAll("#mobileMenu .mobile-icon");

let lockedScrollY = 0; // scroll lock রাখতে

// helper: remove active from all mobile icons
function clearActiveMobileIcons() {
  mobileLinks.forEach((link) => link.classList.remove("active"));
}

// function to set active on a specific link element
function setActiveMobileIcon(linkEl) {
  clearActiveMobileIcons();
  if (linkEl) linkEl.classList.add("active");
}

// utility: lock & unlock scroll (robust approach)
function lockScroll() {
  // preserve current scroll
  lockedScrollY = window.scrollY || window.pageYOffset;
  // fix body so page doesn't jump, and prevent touch/scroll
  document.body.style.position = "fixed";
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
  // if you use a smooth wrapper that has its own scroll, also hide overflow there
  if (smoothWrapper) smoothWrapper.style.overflow = "hidden";
}

function unlockScroll() {
  // remove fixed positioning and restore scroll
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.overflow = "";
  if (smoothWrapper) smoothWrapper.style.overflow = "";

  // restore scroll position
  window.scrollTo(0, lockedScrollY);
  lockedScrollY = 0;
}

// open/close button behaviour (তুমি আগে করছিলে, রেখে দিলাম)
menuBtn.addEventListener("click", () => {
  const isOpening = !menuBtn.classList.contains("open");
  menuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("active");
  pageContent.classList.toggle("blurred");

  if (isOpening) {
    lockScroll();
  } else {
    unlockScroll();
  }
});

// handle click on each mobile link
mobileLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // get target id from href attribute (#home -> home)
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return; // safety
    e.preventDefault();

    const targetId = href.slice(1);
    const targetEl = document.getElementById(targetId);

    // highlight clicked link immediately
    setActiveMobileIcon(link);

    // smooth scroll to section (if exists)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = href;
    }

    // close mobile menu after 200ms
    setTimeout(() => {
      menuBtn.classList.remove("open");
      mobileMenu.classList.remove("active");
      pageContent.classList.remove("blurred");
      unlockScroll();
    }, 200);
  });
});

/* Optional: Keep active link in sync with scroll position
   Uses IntersectionObserver to observe your sections and update active link.
*/
const sectionIds = Array.from(mobileLinks)
  .map((a) => a.getAttribute("href"))
  .filter((h) => h && h.startsWith("#"))
  .map((h) => h.slice(1));
const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if (sections.length) {
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -40% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // find link that points to this section
        const id = entry.target.id;
        // ====== fix: use template literal (backticks) ======
        const activeLink = document.querySelector(
          `#mobileMenu .mobile-icon[href="#${id}"]`
        );
        if (activeLink) setActiveMobileIcon(activeLink);
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
}
