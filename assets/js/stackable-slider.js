var $card = $(".slider .card-item");
var lastCard = $(".slider .card-list .card-item").length - 1;

$(".next").click(function () {
  var prependList = function () {
    if ($(".slider .card-item").hasClass("activeNow")) {
      var $slicedCard = $(".slider .card-item")
        .slice(lastCard)
        .removeClass("transformThis activeNow");
      $(".slider ul").prepend($slicedCard);
    }
  };
  $(".slider li")
    .last()
    .removeClass("transformPrev")
    .addClass("transformThis")
    .prev()
    .addClass("activeNow");
  setTimeout(function () {
    prependList();
  }, 150);
});

$(".prev").click(function () {
  var appendToList = function () {
    if ($(".slider .card-item").hasClass("activeNow")) {
      var $slicedCard = $(".slider .card-item")
        .slice(0, 1)
        .addClass("transformPrev");
      $(".slider .card-list").append($slicedCard);
    }
  };

  $(".slider li")
    .removeClass("transformPrev")
    .last()
    .addClass("activeNow")
    .prevAll()
    .removeClass("activeNow");
  setTimeout(function () {
    appendToList();
  }, 150);
});
