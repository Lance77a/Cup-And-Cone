
$(function () {
    $(document).scroll(function () {
        var $nav = $(".scroll");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());               
    });
});
