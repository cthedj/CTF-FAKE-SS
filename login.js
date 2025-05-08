function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // Start timer
  if (!sessionStorage.getItem('startTime')) {
    sessionStorage.setItem('startTime', Date.now());
  }

  // Store username for future use
  sessionStorage.setItem('username', username);

  // Validate both username and password
  if (username === "AdminGOAT" && password === "dolos2024") {
    sessionStorage.setItem('endTime', Date.now());
    window.location.href = "success.html";
  } else {
    window.location.href = "failure.html";
  }
}
