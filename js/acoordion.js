(function () {
  const container = document.getElementById("accordion");
  if (!container) return;
  const items = Array.from(container.querySelectorAll(".accordion-item"));

  function showPlusMinus(btn, showMinus) {
    const plus = btn.querySelector(".svg-plus");
    const minus = btn.querySelector(".svg-minus");
    if (plus) plus.classList.toggle("hidden", showMinus); // showMinus=true -> hide plus
    if (minus) minus.classList.toggle("hidden", !showMinus); // showMinus=true -> show minus
  }

  function closeItem(it) {
    const btn = it.querySelector("button");
    const panel = it.querySelector(".panel");
    it.dataset.open = "false";
    btn.setAttribute("aria-expanded", "false");

    // animate collapse
    panel.style.transition =
      "max-height 360ms cubic-bezier(.2,.9,.3,1), opacity 260ms";
    panel.style.maxHeight = panel.scrollHeight + "px";
    // force reflow
    panel.offsetHeight;
    panel.style.maxHeight = "0px";
    panel.style.opacity = "0";

    showPlusMinus(btn, false); // show plus, hide minus

    const circle = it.querySelector(".circle");
    if (circle) {
      circle.style.transform = "scale(0.98)";
      setTimeout(() => (circle.style.transform = "scale(1)"), 180);
    }
  }

  function openItem(it) {
    const btn = it.querySelector("button");
    const panel = it.querySelector(".panel");
    it.dataset.open = "true";
    btn.setAttribute("aria-expanded", "true");

    panel.style.transition =
      "max-height 420ms cubic-bezier(.2,.9,.3,1), opacity 260ms";
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.style.opacity = "1";
    // after animation keep a computed maxHeight so it adapts
    setTimeout(() => {
      if (it.dataset.open === "true")
        panel.style.maxHeight = panel.scrollHeight + "px";
    }, 450);

    showPlusMinus(btn, true); // show minus, hide plus

    const circle = it.querySelector(".circle");
    if (circle) {
      circle.style.transform = "scale(1.03)";
      setTimeout(() => (circle.style.transform = "scale(1)"), 200);
    }
  }

  // initialization
  items.forEach((it) => {
    const open = it.dataset.open === "true";
    const btn = it.querySelector("button");
    const panel = it.querySelector(".panel");

    // make sure panel exists
    if (!panel || !btn) return;

    if (open) {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.opacity = "1";
      btn.setAttribute("aria-expanded", "true");
      showPlusMinus(btn, true);
    } else {
      panel.style.maxHeight = "0px";
      panel.style.opacity = "0";
      btn.setAttribute("aria-expanded", "false");
      showPlusMinus(btn, false);
    }

    // click handler
    btn.addEventListener("click", () => {
      const isOpen = it.dataset.open === "true";

      // if you want single-open behavior: close others
      items.forEach((other) => {
        if (other !== it && other.dataset.open === "true") closeItem(other);
      });

      if (isOpen) closeItem(it);
      else openItem(it);
    });

    // keyboard support
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // recompute open panels on resize
  let resizeTimeout = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      items.forEach((it) => {
        if (it.dataset.open === "true") {
          const panel = it.querySelector(".panel");
          if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }, 120);
  });
})();
