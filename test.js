async function checkConnection() {
  try {
    const res = await fetch("http://localhost:5000/test");
    const data = await res.json();
    console.log("✅ Connected to backend:", data.message);
  } catch (err) {
    console.error("❌ Not connected to backend:", err);
  }
}

window.onload = checkConnection;