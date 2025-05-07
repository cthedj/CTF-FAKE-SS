function login() {
  const button = document.querySelector('button[type="submit"]');
  button.disabled = true;
  button.innerHTML = `<span class="spinner"></span> Logging in...`;

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 2000);
}
