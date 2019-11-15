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
