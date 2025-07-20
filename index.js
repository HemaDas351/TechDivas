// Loader removal
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 300);
  }
  revealOnScroll();
  handleScrollAnimation();
});

// Scroll reveal animations
const animatedSections = document.querySelectorAll(".animated-section");
function revealOnScroll() {
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

// Scroll fade-ins
const fadeElements = document.querySelectorAll('.fade-in');
function handleScrollAnimation() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleScrollAnimation);

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Sidebar toggle (hamburger + button)
const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger");
const menuToggleBtn = document.querySelector("#btn");

function toggleSidebar() {
  sidebar.classList.toggle("open");
}
if (hamburger) hamburger.addEventListener("click", toggleSidebar);
if (menuToggleBtn) menuToggleBtn.addEventListener("click", toggleSidebar);

// Optional: Change icon on toggle
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    menuToggleBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    menuToggleBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

// Swipe-to-open (mobile drawer)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX - touchStartX > 80 && !sidebar.classList.contains("open")) {
    sidebar.classList.add("open");
  }
  if (touchStartX - touchEndX > 80 && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  }
}, { passive: true });
async function loginUser(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("token", data.token);
    alert("Login success");
    window.location.href = "admin.html"; // or client.html etc
  } else {
    alert(data.message);
  }
}
