const arrow = document.getElementById('arrow')
const nav = document.getElementById('nav_links')

function toggleMenu() {
    arrow.classList.toggle('arrow_toggle')
    nav.classList.toggle('nav_toggle')
}

arrow.addEventListener('click', toggleMenu)