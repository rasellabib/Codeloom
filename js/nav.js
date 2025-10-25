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
const pageContent = document.getElementById("pageContent"); // তুমি ইতিমধ্যে ব্যবহার করছো বলেছো
const mobileLinks = document.querySelectorAll("#mobileMenu .mobile-icon");

// helper: remove active from all mobile icons
function clearActiveMobileIcons() {
  mobileLinks.forEach((link) => link.classList.remove("active"));
}

// function to set active on a specific link element
function setActiveMobileIcon(linkEl) {
  clearActiveMobileIcons();
  if (linkEl) linkEl.classList.add("active");
}

// open/close button behaviour (তুমি আগে করছিলে, রেখে দিলাম)
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("active");
  pageContent.classList.toggle("blurred");
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
      // Use scrollIntoView with smooth behavior
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // if no element found, still change hash (optional)
      window.location.hash = href;
    }

    // close mobile menu after 200ms (200ms = 0.2s)
    // keep menu visible for 0.2s while scroll starts, then hide and remove blur
    setTimeout(() => {
      menuBtn.classList.remove("open");
      mobileMenu.classList.remove("active");
      pageContent.classList.remove("blurred");
    }, 200);
  });
});

/* Optional: Keep active link in sync with scroll position
   Uses IntersectionObserver to observe your sections and update active link.
   This keeps the dot showing correctly when user scrolls manually.
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
    rootMargin: "0px 0px -40% 0px", // triggers when section crosses ~60% of viewport top
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // find link that points to this section
        const id = entry.target.id;
        const activeLink = document.querySelector(
          `#mobileMenu .mobile-icon[href="#${id}"]`
        );
        if (activeLink) setActiveMobileIcon(activeLink);
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
}
