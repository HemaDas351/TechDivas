// Existing code...

// Loader fade-out after page load
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 300);
  }

  revealOnScroll();
  handleScrollAnimation();
});

// Sidebar toggle
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.getElementById("btn");
const searchBtn = document.querySelector(".bx-search");

if (closeBtn && sidebar) {
  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
  });
}

if (searchBtn && sidebar) {
  searchBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
  });
}

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

// Scroll animation
const animatedSections = document.querySelectorAll(".animated-section");
const revealOnScroll = () => {
  animatedSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);

const fadeElements = document.querySelectorAll(".fade-in");
const handleScrollAnimation = () => {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", handleScrollAnimation);

// Scroll to top
const scrollBtn = document.getElementById("scrollTopBtn");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 🔄 Swipe-to-open sidebar (mobile)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener("touchmove", (e) => {
  touchEndX = e.changedTouches[0].screenX;
}, false);

document.addEventListener("touchend", () => {
  const swipeDistance = touchEndX - touchStartX;

  // Right swipe to open
  if (swipeDistance > 100 && !sidebar.classList.contains("open")) {
    sidebar.classList.add("open");
    menuBtnChange();
  }

  // Left swipe to close
  if (swipeDistance < -100 && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    menuBtnChange();
  }
}, false);
