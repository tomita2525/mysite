// 方法１
var trigger = document.querySelectorAll('.js-accordion-trigger');
for (var i = 0; i < trigger.length; i++) {
  trigger[i].addEventListener('click', function() {
    var body = this.nextElementSibling;
    if (this.classList.contains('is-active')) {
      this.classList.remove('is-active');
      body.classList.remove('is-open');
    } else {
      this.classList.add('is-active');
      body.classList.add('is-open');
    }
  });
}

// 方法２
(function() {
    'use strict';

    var acdHeads;

    // マッチしたclass名を持つ要素を取得
    acdHeads = document.querySelectorAll('.acd_menu_head');

    for (var i = 0; i < acdHeads.length; i++) {
        acdHeads[i].addEventListener('click', function() {

            var acdBody;

            // 同じ親要素を持つ隣接した次の要素を取得
            // <div class="acd_menu_body"></div>
            acdBody = this.nextElementSibling;
            acdBody.style.transition = 'height 0.2s ease-out';

            if (acdBody.style.height) {
                acdBody.style.height = null;
            } else {
                // scrollHeightプロパティはpaddingを含む表示されていない要素の高さを取得
                acdBody.style.height = acdBody.scrollHeight + 'px';
            }
        });
    }
});

// 方法３
let menu = document.getElementsByTagName('h3');

function show(){
  let hideContent = this.nextElementSibling;
  hideContent.classList.toggle('hide');
};

for(let i = 0; i < menu.length; i++){
  menu[i].addEventListener('click', show)
}


// 例外
function clickMenu(){
	const item1 = document.getElementById("item1");

	if(item1.style.display=="block"){
		// noneで非表示
		item1.style.display ="none";
	}else{
		// blockで表示
		item1.style.display ="block";
	}
}
