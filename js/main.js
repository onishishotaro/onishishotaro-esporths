// var startPos = 0,
//   winScrollTop = 0;
// $(window).on("scroll", function () {
//   winScrollTop = $(this).scrollTop();
//   if (winScrollTop >= 600) {
//     $(".js-scroll").addClass("is-scroll");
//   } else {
//     $(".js-scroll").removeClass("is-scroll");
//   }
//   startPos = winScrollTop;
// });

// For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".js-scroll",
  markers: true,
  start: "top center",
  toggleClass: { targets: ".js-scroll", className: "is-scroll" },
});
