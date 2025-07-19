function loadPage(page) {
  document.getElementById('contentFrame').src = page;
}

// Optional: Highlight current sidebar link (if you have a sidebar)
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll(".sidebar nav ul li a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.backgroundColor = "#3a29c3";
  }
});

// Optional: Sidebar toggle (only if your layout has a toggle button)
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.querySelector(".sidebar");

if (toggleBtn && sidebar) {
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}
