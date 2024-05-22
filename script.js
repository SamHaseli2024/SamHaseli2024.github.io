const programmerModeButton = document.querySelector('.programmer-mode');
const programmerModeContent = document.querySelector('.programmer-mode-content');

programmerModeButton.addEventListener('click', () => {
    programmerModeContent.classList.toggle('animate');
    programmerModeContent.style.display = programmerModeContent.style.display === 'block' ? 'none' :