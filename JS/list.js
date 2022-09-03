//aggiungere la classe hovered nel li selezionato
let list = document.querySelectorAll('.navigation li');

function activeLink()
{
    list.forEach((item) => item.classList.remove('hovered'));

    this.classList.add('hovered');
}

list.forEach((item) => item.addEventListener('mouseover', activeLink));