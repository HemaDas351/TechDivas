document.addEventListener("DOMContentLoaded", () => {
  function loadPage(page) {
    document.getElementById('contentFrame').src = page;
  }

  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".sidebar nav ul li a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.backgroundColor = "#3a29c3";
    }
  });

  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector(".sidebar");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  // Make loadPage globally accessible
  window.loadPage = loadPage;
});
