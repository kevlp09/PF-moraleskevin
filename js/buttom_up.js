$(document).ready(function () {
  $(".ir-arriba").click(function () {
    $("body, html").animate(
      {
        scrollTop: "370px",
      },
      200
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1500) {
      $(".ir-arriba").slideDown(300);
    } else {
      $(".ir-arriba").slideUp(300);
    }
  });
});
