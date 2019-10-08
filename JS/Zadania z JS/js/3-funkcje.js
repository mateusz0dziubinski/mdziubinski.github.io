function mnozenie(liczba1, liczba2, liczba3) {
    // przypisuje do zmiennej 'wynik' mnozenia trzech parametrow 
    let wynik = liczba1 * liczba2 * liczba3;

    //Tworzę tekst z wynikiem - 2 sposoby ES5 i ES6
    let rezultatDzialaniaFunkcji = 'Twój wynik to ' + wynik;
    let rezultatDzialaniaFunkcji2 = `Twój wynik to ${wynik}`;  

    //zwracam z funkcji rezultat jej działania. Wszystko poniżej return już się nie wykona
    return rezultatDzialaniaFunkcji2;

    console.log(rezultatDzialaniaFunkcji, rezultatDzialaniaFunkcji2);
}

let wynikDziałaniaFunkcji = mnozenie(2,2,2);
console.log(wynikDziałaniaFunkcji);
//console.log (wynikMnozenia);


//przepisanie powyższej funkcji na funkcję strzałkową
const mnozenieFatArrow = (par1, par2, par3) => {
    let wynik = par1 * par2 * par3;
    let rezultatDzialaniaFunkcji2 = `Twój wynik to: ${wynik}`;
    return rezultatDzialaniaFunkcji2;
}

let wynikMnozeniaFatArrow = mnozenieFatArrow(3,3,3);
console.log(wynikMnozeniaFatArrow);

//przepisanie powyższej funkcji na funkcję strzałkową - skróowo

const mnozenieSkrotowo = (p1, p2, p3) => `Szanowny userze, Twój wynik to: ${p1 * p2 * p3} Pozdrawiamy`;
let wynikSkrotowo1 = mnozenieSkrotowo(2,2,3);
let wynikSkrotowo2 = mnozenieSkrotowo(3,2,3);
let wynikSkrotowo3 = mnozenieSkrotowo(4,2,3);
let wynikSkrotowo4 = mnozenieSkrotowo(5,2,3);
console.log(wynikSkrotowo1, wynikSkrotowo2, wynikSkrotowo3, wynikSkrotowo4);


