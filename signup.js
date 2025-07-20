async function registerUser(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();
  const msg = document.getElementById("signupMsg");

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
}
document.getElementById('registerBtn').addEventListener('click', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  const res = await fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password, role })
  });

  const data = await res.json();
  if (res.ok) {
    alert('Registration successful');
    window.location.href = 'login.html';
  } else {
    alert(data.message || 'Registration failed');
  }
});