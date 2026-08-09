function updateClocks() {
  const now = new Date();

  const zurichTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Zurich",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(now);

  const seoulTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(now);

  document.getElementById("zurich-time").textContent = zurichTime;
  document.getElementById("seoul-time").textContent = seoulTime;
}

updateClocks();

setInterval(updateClocks, 1000);
