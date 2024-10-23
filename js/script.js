document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
})
