const div = document.getElementsByClassName('par-first')[0];
const rodzicDiva = div.parentElement;
const potomkowieDiva = div.children;
const pierwszyPotomek = div.firstElementChild;
const ostatniPotomekDiva = div.lastElementChild;
const elementPrzedDivem = div.previousElementSibling;
const elementZaDivem = div.nextElementSibling;

console.log(elementZaDivem.nextElementSibling);

