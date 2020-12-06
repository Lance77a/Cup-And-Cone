$(document).scroll(() => {
    let $nav = $('.scroll');
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height())
});


$('#toggler').on('click', () => {
    $('#headerNav').toggleClass('bg-expand');
    $('#brand').toggleClass('brand-expand');
});
