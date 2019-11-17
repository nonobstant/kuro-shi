$(function () {
    $('.menu-icon').click(function () {
        $(this).toggleClass('is-open');
    });

    $('.menu-icon-trigger').click(function () {
        $(this).parent('.menu-icon-svg').toggleClass('is-open');
    })
});
