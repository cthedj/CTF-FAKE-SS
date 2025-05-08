function login(event) {
  event.preventDefault();

  const start = sessionStorage.getItem('startTime');
  if (!start) sessionStorage.setItem('startTime', Date.now());

  const password = document.getElementById("password").value;

  if (password === "dolos2024") {
    sessionStorage.setItem('endTime', Date.now());
    window.location.href = "success.html";
  } else {
    window.location.href = "failure.html";
  }
}
