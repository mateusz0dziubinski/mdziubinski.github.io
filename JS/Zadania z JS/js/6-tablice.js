const samochody = [
    'Honda',
    'Fita',
    'Citroen',
    'Mazda',
    'Audi'
];

// dodajmy na końcu tablicy kilka samochodow

samochody.push('BMW', 'Porshe');

// dodajemy na poczatku
samochody.unshift('Dacia', 'Skoda');

// usuwamy z końca tablicy i zwracamy usunięty element do zmiennej
let usunietyZKonca = samochody.pop();

//usuwanie z konca 3 elementy z tablicy
let usunietyZKonca3 = samochody.splice(samochody.length -3);

// usuwamy z początku tablicy i zwracamy usunięty element do zmiennej
let usunietyZPoczatku = samochody.shift();

// zamiana tablicy na string 
let tekstZTablicy = samochody.join(' ****** ');

// tablica ze stringa
let tekstZStringa = tekstZTablicy.split(' ******');

//odwrocenie tablicy
let odwrocenieTablicy = samochody.reverse();

//posortowana tablicy
let posrtowana = samochody.sort();

//sprawdzenie czy element istnieje w tablicy ver 1
let czyIstniejeWTablicy = samochody.indexOf('Polonez');

//sprawdzenie czy elelemnt istnieje w tablicy ver2
let czyIstniejeWTablicy2 = samochody.includes('Polonez');

//sprawdzenie czy zmienna jest tablica
let czyTablica = Array.isArray(samochody);

//metoda do przechodzenia po wszystkich elementach tablicy;
samochody.forEach(function(elelemntTablicy, indexTablicy, tablica){
    console.log(`Wartość elementu: ${elelemntTablicy} | index elementu: ${indexTablicy}`);
});

console.log(samochody, samochody.length);
console.log(`Usunięty element to: ${usunietyZKonca}`);
console.log(`Usnięty element z początku to: ${usunietyZPoczatku}`);
console.log(`Usunięty element z przodu to: ${usunietyZPoczatku}`);
console.log(czyTablica);

