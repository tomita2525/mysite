$(function(){
    $('.login').click(function(){
      $('#login-modal').fadeIn();
    });
    $('.close-modal').click(function(){
      $('#login-modal').fadeOut();
    });

    $('.lesson-hover').hover(
      function(){
        $(this).find('.txt-contents').addClass('txt-active');
      },
      function(){
        $(this).find('.txt-contents').removeClass('txt-active');
      }
    );

    $(".faq-list-item").click(function(){
      if($(this).find('.answer').hasClass('open')){
        removeClass('open');
      } else {
        
      }

    });
});
