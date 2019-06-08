const bodyElement = document.getElementsByTagName("body")[0];
const navBar = document.getElementById("navbar");
let sticky = navBar.offsetTop;
let scrollPos = 0;

function addClassToElement(el, className) {
  if (!el.classList.contains(className)) el.classList.add(className);
}

function removeClassFromElement(el, className) {
  if (el.classList.contains(className)) el.classList.remove(className);
}

window.addEventListener("scroll", function () {
  if (window.innerWidth < 768 && window.pageYOffset >= sticky) {

    addClassToElement(bodyElement, "fixednav");

    if (document.body.getBoundingClientRect().top < scrollPos) {
      // this.console.log("DOWN");
      addClassToElement(bodyElement, "fixednavhide");
      removeClassFromElement(bodyElement, "fixednavshow");
    } else {
      // this.console.log("UP");
      addClassToElement(bodyElement, "fixednavshow");
      removeClassFromElement(bodyElement, "fixednavhide");
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
  } else {
    // if (bodyElement.classList.contains("fixednav")) removeFixedNav(bodyElement);
    removeClassFromElement(bodyElement, "fixednav");
    removeClassFromElement(bodyElement, "fixednavshow");
    removeClassFromElement(bodyElement, "fixednavhide");
  }
});