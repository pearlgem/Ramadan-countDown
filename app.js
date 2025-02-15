alert("UI ko time nhi diya, Sorry");

function updateCountdown() {
  let ramazanDate = new Date("Feb 28, 2025 00:00:00").getTime();
  let now = new Date().getTime();
  let timeLeft = ramazanDate - now;

  let days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
  timeLeft = timeLeft % (1000 * 60 * 60 * 24);

  let hours = Math.floor(timeLeft / 1000 / 60 / 60);
  timeLeft = timeLeft % (1000 * 60 * 60);

  let minutes = Math.floor(timeLeft / 1000 / 60);
  timeLeft = timeLeft % (1000 * 60);

  let seconds = Math.floor(timeLeft / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
