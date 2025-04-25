let timerId;

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.bg-image');
  let current = 0;

  function updateImagesForScreen() {
    const isMobile = window.innerWidth <= 600;

    images.forEach((img, index) => {
      if (isMobile) {
        img.src = `image${index + 1}-mobile.svg`;
      } else {
        img.src = `image${index + 1}.svg`;
      }
    });

    showImage(current);
  }

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove('active');
      if (i === index) {
        img.classList.add('active');
      }
    });
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  updateImagesForScreen();
  showImage(current);

  window.addEventListener('resize', () => {
    updateImagesForScreen();
  });

  // 기존 타이머 있으면 지우고 새로 시작
  if (timerId) {
    clearInterval(timerId);
  }
  timerId = setInterval(nextImage, 5000);

  window.timerId = timerId; // 디버깅용 (콘솔에서 확인)
});