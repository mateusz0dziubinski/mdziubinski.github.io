const btn = document.getElementById('scroll-down');

const scrollDown = () => {
    document.documentElement.scrollTop = window.innerHeight;
}

btn.addEventListener('click', scrollDown);

setTimeout(()=>{
    btn.removeEventListener('click', scrollDown);
}, 1000);

// ************************************************************************

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', () => {
    document.body.classList.add('scroll');
});

h1.addEventListener('mouseleave', () => {
    document.body.classList.remove('scroll');
});

// *************************************************************************

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let imie = document.querySelector('[name="imie"]').Value;
    let nazwisko = document.querySelector('[name="nazwisko"]').Value;
    let wiadomosc = 'Dziękujemy za przesłanie formularza';

    if(imie == '' || nazwisko == ''); {
        wiadomosc = 'Niepoprawnie wypełniony formularz. Prosimy o poprawę';
    }

    document.querySelector('.message').innerHTML = wiadomosc;
});