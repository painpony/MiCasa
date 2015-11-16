//Home effect
$('#home').mouseenter(function
  (){
    $(this).addClass('animated pulse');
  });
  $('#home').mouseleave(function(){
    $(this).removeAttr('class')
  });
// Diary effect
  $('#diary').mouseenter(function
    (){
      $(this).addClass('animated pulse');
    });
    $('#diary').mouseleave(function(){
      $(this).removeAttr('class')
  });
// Library effect
  $('#library').mouseenter(function
    (){
      $(this).addClass('animated pulse');
    });
    $('#library').mouseleave(function(){
      $(this).removeAttr('class')
  });
// Display menu
  $('#home').click(function
    (){
      $('.menu').fadeIn(1000,"linear")
    });
// Close menu
    $('.exit').click(function
      (){
        $('.menu').fadeOut(1000, "linear");
      });
