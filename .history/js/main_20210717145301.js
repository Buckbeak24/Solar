$(function(){

  $('.info__tabs-item').on('click', function (e) {
    e.preventDefault();

    $('.info__tabs-item').removeClass('info__tabs-item--active')
    $(this).addClass('info__tabs-item--active');

    $('.info__tabs-content').removeClass('info__tabs-content--active');
    $ ;

  });

});