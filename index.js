// Hide loader after page load
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 300);
  }

  revealOnScroll();
  handleScrollAnimation();
});

// Login form alert
const loginForm = document.querySelector("form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login functionality coming soon!");
  });
}

// Slide-in animation on scroll
const animatedSections = document.querySelectorAll(".animated-section");

const revealOnScroll = () => {
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Scroll reveal fade-in
const fadeElements = document.querySelectorAll('.fade-in');

const handleScrollAnimation = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', handleScrollAnimation);

// Scroll to Top button
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  const toggleMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
  };

  const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("open");
  };

  // Toggle on hamburger click
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Auto-close on nav link click
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => closeMenu());
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      closeMenu();
    }
  });
}
