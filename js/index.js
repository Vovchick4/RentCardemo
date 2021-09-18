const paralaxImage = document.getElementById("paralaxImage");
const navBar = document.getElementById("header");
const list = document.querySelectorAll("#mp_nav_li_dropdown");
const sideBar = document.getElementById("side_bar_content");
const overlay = document.getElementById("side_bar_overlay");
const body = document.getElementById("body");
const svg = document.getElementById("hamburger");
let sideBarOpened = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    navBar.style.background = "#333";

    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      element.style.background = "rgb(58, 58, 58)";
    }
  } else {
    navBar.style.background = "transparent";

    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      element.style.background = "rgba(194, 194, 194, 0.5)";
    }
  }

  let transformY = window.scrollY / 2;
  let dynamikScale = 1.2 + transformY / 3000 >= 2 ? 2 : 1.2 + transformY / 3000;

  paralaxImage.style.transform = `translate3d(0, ${transformY}px, 0) scale(${dynamikScale})`;
});

function openCloseSideBar() {
  if (sideBarOpened) {
    svg.classList.toggle("opened");
    body.style.overflowY = "scroll";
    if (!(window.scrollY >= 100)) {
      navBar.style.background = "transparent";
    }
    sideBar.style.transform = "translate(100%)";
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
    sideBarOpened = !sideBarOpened;
  } else {
    svg.classList.toggle("opened");
    body.style.overflowY = "hidden";
    navBar.style.background = "#333";
    sideBar.style.transform = "translate(0)";
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
    sideBarOpened = !sideBarOpened;
  }
}
