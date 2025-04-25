const images = document.querySelectorAll('.bg-image');
let current = 0;

setInterval(() => {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}, 5000);

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

// 처음 로딩할 때 한번 체크
updateImagesForScreen();

// 화면 크기 바뀔 때도 체크
window.addEventListener('resize', updateImagesForScreen);