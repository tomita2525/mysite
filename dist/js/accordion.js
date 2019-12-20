
'use strict';
console.log("hello!");

const target = document.getElementById('abc');
target.addEventListener('click', function(){
  // console.log('クリックされました！');
  target.classList.toggle('circle')
});

const acd_target = document.querySelectorAll('.acd_menu_head');

for(var i = 0; i<acd_target.length; i++){
  acd_target[i].addEventListener('click', function(){

    const item = this.nextElementSibling;
    if(item.classList.contains('open')){
      item.classList.remove('open');
    } else {
      item.classList.add('open');
    }
  });
};
