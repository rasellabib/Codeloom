const minVisible = 1500; // loader কমপক্ষে 800ms দেখা যাবে (ইচ্ছে করে বদলাও)
const fadeDuration = 700; // CSS transition duration (ms)

const loaderStart = Date.now();

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (!loader) return;

    const elapsed = Date.now() - loaderStart;
    const remaining = Math.max(0, minVisible - elapsed);

    setTimeout(() => {
        loader.classList.add('opacity-0');
    }, remaining);

    setTimeout(() => {
        loader.style.display = 'none';
    }, remaining + fadeDuration);
});
window.addEventListener('load', () => {
    const navbar = gsap.timeline();
    navbar.from('#navbar', {
        y: 100,
        opacity: 0,
        duration: 0.5,
    });
    const nav = document.getElementById('navbar');
    const navBtn = document.getElementById('navBtn');
    const navLinks = document.getElementById('navLinks');
    const menuBtn = document.getElementById('menuBtn');
    // small delay before expanding

    setTimeout(() => {
        nav.classList.add('nav-expanded');
    }, 1800);
    setTimeout(() => {
        navBtn.classList.add('navItems-expanded');
        navLinks.classList.add('navItems-expanded');
        menuBtn.classList.add('menuBtn-expanded');
    }, 2200);
});

window.scrollTo({
    top: 0,
    behavior: 'smooth',
});
