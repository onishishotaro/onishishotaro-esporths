var startPos = 0,
  winScrollTop = 0;
$(window).on("scroll", function () {
  winScrollTop = $(this).scrollTop();
  if (winScrollTop >= 200) {
    $(".js-scroll").addClass("is-scroll");
  } else {
    $(".js-scroll").removeClass("is-scroll");
  }
  startPos = winScrollTop;
});
