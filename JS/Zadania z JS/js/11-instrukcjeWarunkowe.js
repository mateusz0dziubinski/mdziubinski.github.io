const wiekKasi = 22;
const wiekDominiki = 28;
let miesiac = 7; 

if(wiekKasi > wiekDominiki && miesiac == 9){
    document.body.style.backgroundColor = "red";
}else if(wiekKasi < wiekDominiki && miesiac == 10){
     document.body.style.background = "blue";
}else{
    document.body.style.backgroundColor = "green";
}

switch(miesiac){
    case 8:
        document.body.textContent = "Sierpień"
        break;
    case 9:
        document.body.textContent = "Wrzesień"
    case 10:
        document.body.textContent = "Pażdziernik"
        break;
    case 11:
        document.body.textContent = "Listopad"
    default:
        document.body.textContent = "Nie mam pojęcia co za miesiąc";
}

