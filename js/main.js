const btnDarkMode = document.querySelector(".dark-mood-btn"); // змінено "dark-mood-btn" на ".dark-mood-btn"
btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle("dark-mood-btn--active");
    document.body.classList.toggle("dark");
}
