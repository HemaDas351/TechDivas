async function loginUser(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  const msg = document.getElementById("loginMsg");

  if (res.ok) {
    localStorage.setItem("token", data.token);
    msg.style.color = "green";
    msg.textContent = "Login successful!";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    msg.style.color = "red";
    msg.textContent = data.message || "Login failed";
  }
}
document.getElementById('loginBtn').addEventListener('click', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const res = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (res.ok) {
    alert('Login successful');
    window.location.href = 'dashboard.html';
  } else {
    alert(data.message || 'Login failed');
  }
});