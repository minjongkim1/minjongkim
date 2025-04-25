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
  window.addEventListener('resize', updateImagesForScreen);
  setInterval(nextImage, 5000);
});
