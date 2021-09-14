$(document).ready(function(){
    $('.menu-toggler').on('click',function(){
        $(this).toggleclass('open');
        $('.top-nav').toggleclass('open');
    });
    $('.top-nav .nav-link').on('click',function(){
   $('.menu-toggler').removeClass('open');
   $('.top-nav').removeClass('open');
    })
})