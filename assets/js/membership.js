console.log("loaded");

(function ($) {
  "use strict";

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      (t.style.left = n.clientX + "px"),
        (t.style.top = n.clientY + "px"),
        (e.style.left = n.clientX + "px"),
        (e.style.top = n.clientY + "px"),
        (i.style.left = n.clientX + "px"),
        (i.style.top = n.clientY + "px");
    });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  var pos = 0;
  window.setInterval(function () {
    pos++;
    document.getElementsByClassName(
      "moving-image-bg"
    )[0].style.backgroundPosition = pos + "px 0px";
  }, 18);

  $(document).ready(function () {
    $(".case-study-name:nth-child(1)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(1)").addClass("show");
      $(".case-study-name:nth-child(1)").addClass("active");
    });
    $(".case-study-name:nth-child(2)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(2)").addClass("show");
      $(".case-study-name:nth-child(2)").addClass("active");
    });
    $(".case-study-name:nth-child(3)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(3)").addClass("show");
      $(".case-study-name:nth-child(3)").addClass("active");
    });
    $(".case-study-name:nth-child(4)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(4)").addClass("show");
      $(".case-study-name:nth-child(4)").addClass("active");
    });
    $(".case-study-name:nth-child(1)").trigger("mouseenter");
  });
})(jQuery);
