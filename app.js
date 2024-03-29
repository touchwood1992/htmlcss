const topOffsetOfFIrstSection = document.querySelector(".features-section");
const navMenu = document.querySelector(".navbar.top-nav");
let TotaltopScroll = 0;

function onScrollAnimation(element, className, scrollValue, percentage) {
  const scrolltop = scrollValue;
  const elementOffset = element.offsetTop;

  if (scrolltop + window.innerHeight >= elementOffset + 200) {
    element.classList.add(className);
    element.classList.add("animated");
  } else {
    element.classList.remove(className);
    element.classList.remove("animated");
  }
}

window.onscroll = loadAnimation;
document.addEventListener("DOMContentLoaded", loadAnimation, false);

function loadAnimation() {
  const scrollValue = window.pageYOffset;

  //Making sticky Header
  if (
    scrollValue >
    topOffsetOfFIrstSection.offsetTop - topOffsetOfFIrstSection.offsetTop * 0.2
  ) {
    navMenu.classList.add("js--nav-sticky");
  } else {
    navMenu.classList.remove("js--nav-sticky");
  }

  //Fade In features-section

  onScrollAnimation(
    document.querySelector(".features-section"),
    "fadeIn",
    scrollValue,
    0.15
  );
  onScrollAnimation(
    document.querySelector(".favourite-meal-section"),
    "fadeIn",
    scrollValue,
    0.15
  );
  onScrollAnimation(
    document.querySelector(".app-image-container"),
    "bounceIn",
    scrollValue,
    0.0
  );

  onScrollAnimation(
    document.querySelector(".cities-section"),
    "fadeIn",
    scrollValue,
    0.15
  );
  onScrollAnimation(
    document.querySelector(".testimonial-section"),
    "fadeIn",
    scrollValue,
    0.15
  );
  onScrollAnimation(
    document.querySelector(".pricing-plans-section"),
    "fadeIn",
    scrollValue,
    0.15
  );
  onScrollAnimation(
    document.querySelector(".contact-section"),
    "fadeIn",
    scrollValue,
    0.1
  );
}

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

(function($) {
  $(document).on("click", ".mobile-menu-icon", function(e) {
    $("body").toggleClass("mobilemenu");
    if ($(this).hasClass("ion-ios-menu")) {
      $(this).removeClass("ion-ios-menu");
      $(this).addClass("ion-ios-close");
    } else {
      $(this).removeClass("ion-ios-close");
      $(this).addClass("ion-ios-menu");
    }
  });
})(jQuery);
