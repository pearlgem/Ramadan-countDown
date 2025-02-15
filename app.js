alert("UI ko time nhi diya, Sorry");
function updateCountdown() {
  let millisecondsInOneDay = 1000 * 60 * 60 * 24;
  console.log(millisecondsInOneDay);

  console.log(miliSeconds);
  let ramazanDate = new Date("Feb 28, 2025 00:00:00").getTime();
  let now = new Date().getTime();
  let bakiTime = ramazanDate - now;

  let days = Math.floor(bakiTime / 86400000);
  bakiTime = bakiTime % 86400000;
  let hours = Math.floor(bakiTime / 3600000);
  bakiTime = bakiTime % 3600000;
  let minutes = Math.floor(bakiTime / 60000);
  bakiTime = bakiTime % 60000;
  let seconds = Math.floor(bakiTime / 1000);
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}
setInterval(updateCountdown, 1000);
