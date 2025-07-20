async function registerUser(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("signupMsg");

  try {
    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      msg.style.color = "green";
      msg.textContent = "Signup successful! Redirecting to login...";
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    } else {
      msg.style.color = "red";
      msg.textContent = data.message || "Signup failed";
    }
  } catch (error) {
  msg.style.color = "red";
  msg.textContent = "An error occurred: " + error.message;
  console.error(error); // shows detailed error in DevTools
}

}

// This line is not required as your HTML already uses: onsubmit="registerUser(event)"
// document.getElementById("signupForm").addEventListener("submit", registerUser);
