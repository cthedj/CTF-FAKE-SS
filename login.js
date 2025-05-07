const validUser = "admin";
const validPass = atob("Y3liZXJwYXNzMjAyNQ=="); // Base64 of "cyberpass2025"

function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === validUser && pass === validPass) {
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect username or password");
  }
}
