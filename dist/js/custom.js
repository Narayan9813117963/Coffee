$(function () {
  initScrollToTop();
});

function initScrollToTop() {
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop(),
      docHeight = $(document).height(),
      winHeight = $(window).height(),
      scrollPercent = scrollTop / (docHeight - winHeight),
      scrollPercentRounded = Math.round(scrollPercent * 100);
    if (scrollPercentRounded > 50) {
      $(".topTop").css({
        opacity: 1,
        transform: "translateY(-50%)",
      });
    } else {
      $(".topTop").css({
        opacity: 0,
        transform: "translateY(50%)",
      });
    }
  });

  // Click event to scroll to top
  $(".topTop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
}

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".header-navbar"); // Use querySelector instead of getElementById
  if (window.scrollY > 100) {
    navbar.classList.add("fixed");
    navbar.style.opacity = "1";
  } else {
    navbar.classList.remove("fixed");
    navbar.style.opacity = "1";
  }
});

