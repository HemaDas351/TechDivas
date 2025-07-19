<script>
  {/* // Highlight current link */}
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".sidebar nav ul li a").forEach(link => {
    if(link.getAttribute("href") === currentPage) {
      link.style.backgroundColor = "#3a29c3";
    }};
  

  {/* // Sidebar toggle logic */}
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector(".sidebar");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    })
  }
</script>
// admin.js
async function fetchClients() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Login first!");
    window.location.href = "login.html";
    return;
  }

  const res = await fetch("http://localhost:5000/client/all", {
    headers: {
      "Authorization": 'Bearer ${token}'
    }
  });

  const data = await res.json();
  console.log(data); // Render data on page
}

window.onload = fetchClients;
