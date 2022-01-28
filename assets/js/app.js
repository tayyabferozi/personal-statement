document.addEventListener("scroll", function () {
  let navbar = document.querySelector("#navbar");

  let scrolledVal = document.querySelector("html").scrollTop;

  if (scrolledVal > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  document.querySelector("#preloader").remove();
});

AOS.init({ duration: 700, offset: 200 });
