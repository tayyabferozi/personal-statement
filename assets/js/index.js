import { CountUp } from "./countUp.min.js";

window.addEventListener("load", function () {
  var swiper = new Swiper(".testimonials-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  $("#faqs .question .q-statement").click(function () {
    $this = $(this);
    $this.parent().toggleClass("active");
    $this.siblings(".answer").slideToggle();
  });

  let demo = new CountUp("count-up", 5245);
  if (!demo.error) {
    demo.start();
    console.log("STARTED");
  } else {
    console.log("ERROR");
    console.error(demo.error);
  }
});
