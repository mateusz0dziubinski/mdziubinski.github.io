function classChanger() {
    if ($(window).width() < 580) {
        $('header').removeClass('fixed-top').addClass('mobile');
    } else { $('header').addClass('fixed-top').removeClass('mobile')}
}

window.addEventListener('resize', classChanger);