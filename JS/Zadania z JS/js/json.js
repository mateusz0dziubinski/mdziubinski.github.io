// przykladowa odp z API
let jsonOsoby = {
   "osoby": [
       {
           imie: "Krystian", 
           nazwisko: "Dziopa", 
           wzrost: 180, 
           oczy: "niebieskie", 
           zainteresowania: [ 
               { nazwa: "podroze" }, 
               { nazwa: "gotowanie" }
           ] 
       },
       {
           imie: "Dominik",
           nazwisko: "Gomuła",
           wzrost: 170,
           oczy: "brązowe",
           zainteresowania: [
               { nazwa: "gotowanie" },
               { nazwa: "języki" }
           ]
       },
       {
           imie: "Claudia",
           nazwisko: "Żelazowska",
           wzrost: 167,
           oczy: "brązowe",
           zainteresowania: [
               { nazwa: "programowanie" },
               { nazwa: "podroze" },
               { nazwa: "języki" }
           ]
           
       }
   ]
}

jsonOsoby.osoby.forEach(function(elementTablicy, indexTablicy){
    let osoba = `Imię: ${elementTablicy.imie}, nazwisko: ${elementTablicy.nazwisko}, wzrost: ${elementTablicy.wzrost}, zainteresowania`;
    let dodatkowyText =``;
    if(elementTablicy.zainteresowania.length > 0) {
        elementTablicy.zainteresowania.forEach(function(element, index){
            dodatkowyText += `${element.nazwa},`;
        });
    };
    osoba += dodatkowyText;
    console.log(osoba);
});