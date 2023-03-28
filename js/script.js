const arrow = document.getElementById('arrow');
const nav = document.getElementById('nav_links');
const searchbar = document.querySelector('input[type="text"]');
const list = document.getElementById('list');

function toggleMenu() {
    arrow.classList.toggle('arrow_toggle');
    nav.classList.toggle('nav_toggle');
}
function toggleList() {
    list.classList.toggle('list_toggle');
}

arrow.addEventListener('click', toggleMenu);
searchbar.addEventListener('focus', toggleList);
searchbar.addEventListener('blur', toggleList);

function search_type() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let types = document.getElementsByClassName('types');
    
    for (i = 0; i < types.length; i++) { 
        if (!types[i].innerHTML.toLowerCase().includes(input)) {
            types[i].style.display="none";
        }
        else {
            types[i].style.display="list-item";
        }
    }
}

