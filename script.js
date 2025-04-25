document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.bg-image');

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

  updateImagesForScreen();
  window.addEventListener('resize', updateImagesForScreen);
});