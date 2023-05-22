const arrow_line_1 = document.getElementById('arrow_line_1');
const arrow_line_2 = document.getElementById('arrow_line_2');
const nav = document.getElementById('nav');
const searchbar = document.querySelector('input[type="text"]');
const list = document.getElementById('list');

function toggleMenu() {
    arrow_line_1.classList.toggle('arrow_toggle_1');
    arrow_line_2.classList.toggle('arrow_toggle_2');
    nav.classList.toggle('nav_toggle');
}
function toggleList(time) {
    setTimeout(() => {list.classList.toggle('list_toggle');}, time);
}

arrow.addEventListener('click', toggleMenu);
searchbar.addEventListener('focus', () => { toggleList(150) }); // 150 = 0,15 sekunder
searchbar.addEventListener('blur', () => { toggleList(100) });  // 100 är minsta som fortfarande går att klicka på länken

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

