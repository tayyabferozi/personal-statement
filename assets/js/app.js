window.addEventListener("load", function () {
  document.addEventListener("scroll", function () {
    let navbar = document.querySelector("#navbar");

    let scrolledVal = document.querySelector("html").scrollTop;

    if (scrolledVal > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  $("#preloader").remove()
  AOS.init({ duration: 700, offset: 200 });

  const cursor = document.querySelector(".cursor");
  var timeout;

  if ("ontouchstart" in document.documentElement) {
    cursor.style.display = "none";
  }

  // follow cursor on mousemove
  document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    //cursor effects when mouse stopped
    function mouseStopped() {
      cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
  });

  //cursor effects when mouseout
  document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
  });

  // CARDS ANIMATIONS

  // const container = document.querySelector("#why-us .cards .row > *");
  // const card = document.querySelector("#why-us .cards .card");
  // const title = document.querySelector("#why-us .cards .card h3");
  // // const santa = document.querySelector(".santa");
  // // const tree = document.querySelector(".tree");

  // //card rotate on mouse move
  // container.addEventListener("mousemove", (rotate) => {
  //   let x = (innerWidth / 2 - rotate.pageX) / 50;
  //   let y = (innerHeight / 2 - rotate.pageY) / 50;

  //   card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
  // });

  // //card effects on mouse over the card
  // container.addEventListener("mouseover", () => {
  //   title.style.transform = "translate3d(0, 0, 160px)";
  //   // santa.style.transform = "translate3d(0, 0, 220px)";
  //   // tree.style.transform = "translate3d(0, 0, 120px)";
  //   card.style.transition = "all 0.1s ease";
  // });

  // //card back to normal when mouse out
  // container.addEventListener("mouseout", () => {
  //   card.style.transform = "rotateY(0deg) rotateX(0deg)";
  //   card.style.transition = "all 0.5s ease";
  //   title.style.transform = "translate3d(0, 0, 0)";
  //   // santa.style.transform = "translate3d(0, 0, 0)";
  //   // tree.style.transform = "translate3d(0, 0, 0)";
  // });
});
