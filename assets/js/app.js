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

  let jugaruString =
    "bottom: 21px; right: 23px; opacity: 1; transition: opacity 0.5s ease 0s; box-sizing: border-box; direction: ltr; position: fixed !important; z-index: 16000160 !important";

  $("#preloader").remove();
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

  setTimeout(function () {
    for (let i = 0; i <= 9999; i++) {
      $("#gb-widget-" + i).css("bottom", 68);
      console.log("#gb-widget-" + i);
    }
  }, 500);
});

var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/622116c5a34c245641294f2d/1ft8k1tck";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

function toggleTawkTo() {
  Tawk_API.toggle();
}

$(".btn").click(toggleTawkTo);
