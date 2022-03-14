window.addEventListener("load", function () {
  // fbq("track", "ViewContent");

  document.addEventListener("scroll", function () {
    let navbar = document.querySelector("#navbar");

    let scrolledVal = document.querySelector("html").scrollTop;

    if (scrolledVal > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

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

  //  <!-- Your Chat Plugin code -->

  var chatbox = document.getElementById("fb-customer-chat");
  chatbox.setAttribute("page_id", "102000559086229");
  chatbox.setAttribute("attribution", "biz_inbox");

  // <!-- Your SDK code -->

  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: "v13.0",
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
});

var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();

Tawk_API.onChatStarted = function () {
  dataLayerPush("Chat Started");
  console.log("Chat started");
  fbq("track", "Lead");
};

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

$(".btn.tt-toggle").click(function () {
  fbq("track", "Contact");
  toggleTawkTo();
});
// $(".btn:not(.no-tt)").click(toggleTawkTo);
