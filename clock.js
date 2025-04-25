function updateClocks() {
  const now = new Date();
  
  // Zürich (CET) 시간
  const zurichTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Zurich' }));
  const zurichStr = `Zürich (CET) ${zurichTime.getHours().toString().padStart(2, '0')}:${zurichTime.getMinutes().toString().padStart(2, '0')}:${zurichTime.getSeconds().toString().padStart(2, '0')}`;

  // Seoul (KST) 시간
  const seoulTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
  const seoulStr = `Seoul (KST) ${seoulTime.getHours().toString().padStart(2, '0')}:${seoulTime.getMinutes().toString().padStart(2, '0')}:${seoulTime.getSeconds().toString().padStart(2, '0')}`;

  document.getElementById('zurich-time').textContent = zurichStr;
  document.getElementById('seoul-time').textContent = seoulStr;
}

setInterval(updateClocks, 1000);
updateClocks(); // 처음 한번 바로 실행
