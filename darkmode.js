document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('darkmode-toggle');

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.bio').classList.toggle('dark-mode');
  });
});