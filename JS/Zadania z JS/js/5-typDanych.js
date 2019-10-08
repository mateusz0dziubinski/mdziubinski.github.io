// typ liczbowy

let wyplata = 5400;
let premia = 1200;

const dochod = wyplata + premia;
console.log(dochod, typeof dochod);

// typ string 
let wyplataString = '5400';
let premiaString = '1200';

const dochodString = wyplataString + premiaString;
const dochodStringNum = Number(wyplataString) + Number(premiaString); 

console.log(dochodStringNum, typeof dochodStringNum);

//typ logiczny Boolean

let czyIdziemyNaChinczyka =  true;
if(czyIdziemyNaChinczyka) {
    console.log('Jemy Chinola');
}else{
    console.log('Nie jemy Chinola');    
}

console.log(typeof czyIdziemyNaChinczyka);

// type undefined
let zmienna;
console.log(zmienna, typeof zmienna);

// null
let tytulStrony = document.getElementById('tytul');
console.log(tytulStrony, typeof tytulStrony);