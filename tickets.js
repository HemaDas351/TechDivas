// tickets.js
async function fetchTickets() {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/tickets/all", {
    headers: {
      "Authorization": 'Bearer ${token}'
    }
  });

  const data = await res.json();
  console.log(data);
}
window.onload = fetchTickets;