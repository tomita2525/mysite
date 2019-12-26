'use strict';
// window.onload = function(){
document.addEventListener('DOMContentLoaded', function() {
  console.log("hello!");

  // const target = document.getElementById('abc');
  // target.addEventListener('click', function(e){
  //   // console.log('クリックされました！');
  //   target.classList.toggle('circle');
  //   console.log(e);
  // });

  const acd_target = document.querySelectorAll('.acd_menu_head');
  const func = function() {
    const item = this.nextElementSibling;
    if (item.classList.contains('open')) {
      item.classList.remove('open');
    } else {
      item.classList.add('open');
    }
  };

  for (var i = 0; i < acd_target.length; i++) {
    acd_target[i].addEventListener('click', func);
  }

});

$(function() {
  console.log("salam!");

  $('.box_content').click(function() {
    $(this).toggleClass('circle');
  });


  $('.j_acd_menu_head').click(function() {
    var $items = $(this).next();
    if ($items.hasClass('j_open')) {
      $items.removeClass('j_open');
      $items.slideUp(1000);
    } else {
      $items.addClass('j_open');
      $items.slideDown(1000);
    }
  });

  // img要素にhoverで説明文表示
  $('.img-hover').hover(function() {
    var $item = $(this).siblings().find('.text');
    $(this).siblings('.text').toggle('text-active');
  }, );
});
