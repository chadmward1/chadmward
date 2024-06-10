const colorModeToggle = document.getElementById('color-mode-toggle');
const body = document.body;

colorModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    colorModeToggle.textContent = '🌞'; // Sun emoji
  } else {
    colorModeToggle.textContent = '🌜'; // Moon emoji
  }
});