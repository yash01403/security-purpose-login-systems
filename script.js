// Simple hash function (for demo)
function hashPassword(password) {
  return btoa(password); // base64 encoding
}

// Signup
function signup() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (user === "" || pass === "") {
    msg.innerText = "❌ Fill all fields";
    msg.style.color = "red";
    return;
  }

  if (localStorage.getItem(user)) {
    msg.innerText = "⚠️ User already exists";
    msg.style.color = "orange";
    return;
  }

  const hashed = hashPassword(pass);
  localStorage.setItem(user, hashed);

  msg.innerText = "✅ Signup successful!";
  msg.style.color = "green";
}

// Login
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  const stored = localStorage.getItem(user);

  if (!stored) {
    msg.innerText = "❌ User not found";
    msg.style.color = "red";
    return;
  }

  if (stored === hashPassword(pass)) {
    msg.innerText = "✅ Login successful!";
    msg.style.color = "green";

    // Redirect (optional)
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);

  } else {
    msg.innerText = "❌ Wrong password";
    msg.style.color = "red";
  }
}