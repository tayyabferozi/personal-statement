(function () {
  var options = {
    facebook: "102000559086229", // Facebook page ID
    whatsapp: "+44 7415 783672", // WhatsApp number
    call_to_action: "Message us", // Call to action
    button_color: "#FF6550", // Color of button
    position: "left", // Position may be 'right' or 'left'
    order: "facebook,whatsapp", // Order of buttons
  };
  var proto = document.location.protocol,
    host = "getbutton.io",
    url = proto + "//static." + host;
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = url + "/widget-send-button/js/init.js";
  s.onload = function () {
    WhWidgetSendButton.init(host, proto, options);
  };
  var x = document.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s, x);
})();
