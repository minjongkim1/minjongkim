function updateClocks() {
  const now = new Date();

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  };

  const zurichTime = new Intl.DateTimeFormat("en-GB", {
    ...options,
    timeZone: "Europe/Zurich"
  }).format(now);

  const seoulTime = new Intl.DateTimeFormat("en-GB", {
    ...options,
    timeZone: "Asia/Seoul"
  }).format(now);

  document.getElementById("zurich-time").textContent = zurichTime;
  document.getElementById("seoul-time").textContent = seoulTime;
}

updateClocks();
setInterval(updateClocks, 1000);
