// login.js
function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!sessionStorage.getItem('startTime')) {
    sessionStorage.setItem('startTime', Date.now());
  }

  sessionStorage.setItem('username', username);

  if (username === secret.username && password === secret.password) {
    sessionStorage.setItem('endTime', Date.now());
    window.location.href = "success.html";
  } else {
    window.location.href = "failure.html";
  }
}
