
$('#home').mouseenter(function () {
  $(this).addClass('animated pulse');
});
$('#home').mouseleave(function () {
  $(this).removeAttr('class')
});
// Diary effect
$('#diary').mouseenter(function () {
  $(this).addClass('animated pulse');
});
$('#diary').mouseleave(function () {
  $(this).removeAttr('class')
});
// Library effect
$('#library').mouseenter(function () {
  $(this).addClass('animated pulse');
});
$('#library').mouseleave(function () {
  $(this).removeAttr('class')
});
// Display menu
$('#home').click(function () {
  $('.menu').css({"display":"block"});
});
// Close menu
$('.exit').click(function () {
  $('.menu').addClass('fadeOut');
});
$('.food').draggable({
  containment: $('#babe-zone'),
  revert: true,
  stack: '.objects'
});
$('.shape').droppable({
  drop: function (event, ui) {
    var regExp = /^(circle|square|triangle)$/;
    var food = event.toElement;
    if (food.classList && food.classList.toString().match(/weird/)) {
      return;
    }
    var target = event.target;
    var targetShape = null;
    var foodShape = null;
    for (var i = 0; food.classList.length; i++) {
      if (food.classList[i].match(regExp)) {
        foodShape = food.classList[i];
        break;
      }
    }
    for (var i = 0; target.classList.length; i++) {
      if (target.classList[i].match(regExp)) {
        targetShape = target.classList[i];
        break;
      }
    }
    if (foodShape == targetShape) {
      event.toElement.remove();
    }
  }
});
