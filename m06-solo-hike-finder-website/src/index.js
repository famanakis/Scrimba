//Access the DOM
const mobileNavMenu = document.getElementById("mobile-nav-menu")
const mobileNavClose = document.getElementById("mobile-nav-close")
const btnNavMobile = document.getElementById("btn-nav-mobile")
const mobileNavLink = document.querySelectorAll('.mobile-nav-link')

btnNavMobile.addEventListener('click', () => mobileNavMenu.style.display = "block")
mobileNavClose.addEventListener('click', () => mobileNavMenu.style.display = "none")

mobileNavLink.forEach(link =>  
    link.addEventListener('click', () => mobileNavMenu.style.display = "none")
    )
