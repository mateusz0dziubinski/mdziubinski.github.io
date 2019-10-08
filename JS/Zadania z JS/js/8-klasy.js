let kolekcjaAut = [];

class Samochod{
    constructor(marka, model, przebieg, silnik, rocznik, kolor, ) {
        this.marka = marka;
        this.model = model;
        this.przebieg = przebieg;
        this.silnik = silnik;
        this.rocznik = rocznik;
        this.kolor = kolor;
    }

    wyswietlInfo(){
        document.body.insertAdjacentHTML('beforeend',
            `Samochód\n,
            Marka: ${this.marka}\n,
            Model ${this.model}\n,
            Przebieg ${this.przebieg}\n,
            Silnik ${this.silnik}\n,
            Rocznik ${this.rocznik}\n,
            Kolor ${this.kolor}\n
            <br>
        `);
    }

    zapisDoBazy(){
        kolekcjaAut.push(this);
    }

}

let auto1 = new Samochod(
    'BMW', 
    'X6',
    50000,
    'disel',
    2017,
    'zielony',
);

auto1.wyswietlInfo();
auto1.zapisDoBazy();

auto1 = new Samochod(
    'Audi',
    'A6',
    80000,
    'disel',
    2019,
    'czerwony',
);

auto1.wyswietlInfo();
auto1.zapisDoBazy();


console.log(kolekcjaAut);

kolekcjaAut.forEach(function(elementTablicy, indexTablicy){
    console.log(elementTablicy.marka, elementTablicy.model, elementTablicy.kolor, indexTablicy)
});