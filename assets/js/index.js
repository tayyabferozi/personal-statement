import { CountUp } from "./countUp.min.js";

let selectedPages = 1;
let amountOfOnePage = 12;

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
    autoplay: true,
    loop: true,
    disableOnInteraction: false,
  });

  $("#faqs .question .q-statement").click(function () {
    let $this = $(this);
    $this.parent().toggleClass("active");
    $this.siblings(".answer").slideToggle();
  });

  let demo = new CountUp("count-up", 5245);
  if (!demo.error) {
    demo.start();
  } else {
    console.error(demo.error);
  }

  $("#pages").change(function (e) {
    selectedPages = parseInt(e.target.value);

    updatePrice();
  });

  let $price = $("#total-price");
  let isNewCustomerChecked = true;

  $("#new-customer").change(function (e) {
    let isNewCustomerChecked = e.target.checked;
    let $discount = $("#discount-wrap");

    if (isNewCustomerChecked) {
      $discount.removeClass("hide");
      $price.removeClass("hide");
    } else {
      $discount.addClass("hide");
      $price.addClass("hide");
    }
    updatePrice();
  });

  updatePrice();

  function updatePrice() {
    let totalPrice = selectedPages * amountOfOnePage;

    $("#without-discount-price").html(`$ ${totalPrice.toFixed(2)}`);
    if (isNewCustomerChecked) {
      $price.html(`$ ${(totalPrice - totalPrice * 0.15).toFixed(2)}`);
    } else {
      $price.html(`$ ${totalPrice.toFixed(2)}`);
    }
  }
});
