document.getElementById("loginBtn").addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    const msg = document.getElementById("loginMsg");

    if (res.ok) {
      // Store token
      localStorage.setItem("token", data.token);

      // Show success
      msg.style.color = "green";
      msg.textContent = "Login successful!";

      // Redirect
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    } else {
      msg.style.color = "red";
      msg.textContent = data.message || "Login failed!";
    }
  } catch (error) {
    console.error("Login error:", error);
    const msg = document.getElementById("loginMsg");
    msg.style.color = "red";
    msg.textContent = "Something went wrong!";
  }
});