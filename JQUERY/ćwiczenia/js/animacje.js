$(function(){
    'use strict';

    //efekt hide i show
    $('p').hide(3000).show(3000);

    //pojawia się i znika
    $('h1').fadeOut(3000).fadeIn(3000);

    //przejeżdżanie
    $('h2').slideUp(3000).slideDown(3000);

 /*   //efekt animacji z funkcją zwrotną animacja
    function koniecAnimacji(){
         console.log('zakończono pierwszą animację, zaraz startuje druga 🙂');

         $('h3').animate({'font-size': '3em', 'margin-left': '0px'}, 2000);
     }

    $('h3').animate({'font-size': '3em', 'margin-left': '100px'}, 2000, koniecAnimacji);

});
*/
function koniecAnimacji(){
   
    $('h3').animate({'font-size': '6em', 'margin-left': '0px'}, 2000);}

    $('h3').animate({'font-size': '3em', 'margin-left': '100px', "color": "blue"}, 2000,);

    $('h3').animate({'background-color' : 'red'}, 2000);

});


