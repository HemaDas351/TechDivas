async function login(e) {
  e.preventDefault();

  const username = document.getElementById("user").value.trim();
  const password = document.getElementById("pass").value.trim();
  const msg = document.getElementById("loginMsg");

  try {
    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      msg.style.color = "green";
      msg.textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    } else {
      msg.style.color = "red";
      msg.textContent = data.message || "Login failed";
    }
  } catch (err) {
    msg.style.color = "red";
    msg.textContent = "An error occurred. Please try again.";
  }
}
