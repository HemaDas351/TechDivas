document.addEventListener("DOMContentLoaded", () => {
  // Load page into iframe
  function loadPage(page) {
    document.getElementById('contentFrame').src = page;
  }

  // Make loadPage accessible globally
  window.loadPage = loadPage;

  // Highlight current sidebar link
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".sidebar nav ul li a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.backgroundColor = "#3a29c3";
    }
  });

  // Sidebar toggle logic
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector(".sidebar");
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  // Fetch clients data on load
  async function fetchClients() {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Login first!");
      window.location.href = "login.html";
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/client/all", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      const data = await res.json();
      console.log(data); // You can render this data in your HTML
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  }

  fetchClients();
});
