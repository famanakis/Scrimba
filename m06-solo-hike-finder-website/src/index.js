//Access the DOM
const mobileNavMenu = document.getElementById("mobile-nav-menu")
const mobileNavClose = document.getElementById("mobile-nav-close")

mobileNavMenu.addEventListener('click', () => {mobileNavMenu.style.display = "flex"})
mobileNavClose.addEventListener('clik', () => {mobileNavMenu.style.display = "none"})
