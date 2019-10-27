let tekstParagrafPierwszy = $('#paragraf').text();
console.log(tekstParagrafPierwszy);

$(".paragraf").eq(1).text('Ala ma kota');

$(".paragrafnext").html ("To jest <strong>paragraf</strong> z dodanym <br> HTML");

$(".paragrafnext").append("Treść na końcu selektora");

$(".paragrafnext").prepend("Treść na początku selektora");

$(".paragrafnext").after("Treść za selektorem");

$(".paragrafnext").before("Treść przed selektorem");

$('strong').remove();

$('.paragraf').empty();

$(".paragrafnext").css("color", "blue");
$(".paragrafnext").css({'font-size' : '3em', 'color':'red' });

$('input#imie').val('Krystian');

$('h1').addClass('blue');

$('h1').attr('imie', 'Marcin')



