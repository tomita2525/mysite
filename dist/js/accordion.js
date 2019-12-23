
'use strict';
// window.onload = function(){
window.addEventListener('DOMContentLoaded', function() {
  console.log("hello!");

  const target = document.getElementById('abc');
  target.addEventListener('click', function(e){
    // console.log('クリックされました！');
    target.classList.toggle('circle');
    console.log(e);
  });

  const acd_target = document.querySelectorAll('.acd_menu_head');
  const func = function(){
    const item = this.nextElementSibling;
    if(item.classList.contains('open')){
      item.classList.remove('open');
    } else {
      item.classList.add('open');
    }
  };

  for(var i = 0; i<acd_target.length; i++){
    acd_target[i].addEventListener('click', func);
  }

});

$(function(){
  console.log("salam!");
  
  $('.j_acd_menu_head').click(function() {
    var $items = $(this).next();
    if($items.hasClass('open')){
      $items.removeClass('open');
      $items.slideUp(3000);
    } else {
      $items.addClass('open');
      $items.slideDown(3000);
    }
  });
});
