<<<<<<< HEAD
=======
ion.sound({
  sounds: [{
      name: "good",
      volume: 1
    },
    {
      name: "bad",
      volume: 1
  }],
  path: "sounds/",
  preload: true
});

>>>>>>> 5dd259863c8709889cb5e601b5a1d229d1954f36
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
      ion.sound.play('bad');
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
      ion.sound.play('good');
    } else {
      ion.sound.play('bad');
    }
  }
});
