function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Store username in sessionStorage for later use
  sessionStorage.setItem('username', username);

  // Start timer if not already set
  if (!sessionStorage.getItem('startTime')) {
    sessionStorage.setItem('startTime', Date.now());
  }

  // Check password
  if (password === "dolos2024") {
    sessionStorage.setItem('endTime', Date.now());
    window.location.href = "success.html";
  } else {
    window.location.href = "failure.html";
  }
}
