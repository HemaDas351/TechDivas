// deadlines.js
async function fetchDeadlines() {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/deadlines/all", {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const data = await res.json();
  console.log(data);
  // TODO: Render deadlines to the page
}

window.onload = fetchDeadlines;
