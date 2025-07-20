document.getElementById('addClientForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  const token = localStorage.getItem('token');

  if (!token) {
    alert('Please login first. No token found.');
    window.location.href = 'login.html';
    return;}

  try {
    const response = await fetch('http://localhost:5000/api/client/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`  // ✅ CORRECT SYNTAX
      },
      body: JSON.stringify({ name, email, password, role })
    });

    const data = await response.json();

    if (response.ok) {
      alert('Client added successfully!');
      document.getElementById('addClientForm').reset();
    } else {
      alert("Failed to add client: " + (data.message || 'Unknown error'));
    }
  } catch (err) {
    alert('Something went wrong: ' + err.message);
  }
});
