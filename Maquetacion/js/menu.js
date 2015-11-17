//Navigation Section -----------------

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
// Menu Section ----------------------

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

//Awards Section --------------------------

// Display menu
  $('#diary').click(function
    (){
      $('.awards').fadeIn(1000,"linear")
    });
// Close menu
    $('.exit').click(function
      (){
        $('.awards').fadeOut(1000, "linear");
      });


// Character Section -----------------------

//Character effect
$('#violeta').mouseenter(function
  (){
    $(this).addClass('animated pulse');
  });
  $('#violeta').mouseleave(function(){
    $(this).removeAttr('class')
  });

  //Character effect
  $('#samuel').mouseenter(function
    (){
      $(this).addClass('animated pulse');
    });
    $('#samuel').mouseleave(function(){
      $(this).removeAttr('class')
    });
