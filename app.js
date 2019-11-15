const topOffsetOfFIrstSection = document.querySelector(".features-section");
const navMenu = document.querySelector(".navbar.top-nav");

window.onscroll = function() {
  const scrollValue = window.pageYOffset;

  if (
    scrollValue >
    topOffsetOfFIrstSection.offsetTop - topOffsetOfFIrstSection.offsetTop * 0.2
  ) {
    navMenu.classList.add("js--nav-sticky");
  } else {
    navMenu.classList.remove("js--nav-sticky");
  }
};

$(document).on("click", 'a[href^="#"]', function(e) {
  // target element id
  var id = $(this).attr("href");

  // target element
  var $id = $(id);
  if ($id.length === 0) {
    return;
  }

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $id.offset().top;

  // animated top scrolling
  $("body, html").animate({ scrollTop: pos - 50 });
});
