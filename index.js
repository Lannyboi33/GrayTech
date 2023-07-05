const hambugerMenu = document.getElementById("hamburger-menu")
const menuToggle = document.getElementById('menu-toggle')

menuToggle.addEventListener("click", () => {
    hambugerMenu.classList.toggle("active")
})