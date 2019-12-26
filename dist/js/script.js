$(function() {
  $('.login').click(function() {
    $('#login-modal').fadeIn();
  });
  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
  });

  $('.lesson-hover').hover(
    function() {
      $(this).find('.txt-contents').addClass('txt-active');
    },
    function() {
      $(this).find('.txt-contents').removeClass('txt-active');
    }
  );

  $(".faq-list-item").click(function() {
    var $answer = $(this).find('.answer');
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp(1000);
    } else {
      $answer.addClass('open');
      $answer.slideDown(1000);

    }

  });
});
