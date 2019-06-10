const bodyElement = document.getElementsByTagName("body")[0];
const navBar = document.getElementById("navbar");
let sticky = navBar.offsetTop; // get top offset for navbar
let scrollPos = 0;

function addClassToElement(el, className) {
  // add class to elements class list
  if (!el.classList.contains(className)) el.classList.add(className);
}

function removeClassFromElement(el, className) {
  // remove class from elements class list
  if (el.classList.contains(className)) el.classList.remove(className);
}

//Add event listener for scroll action
window.addEventListener("scroll", function () {
  if (window.innerWidth < 768 && window.pageYOffset >= sticky) {
    // Use fixednav after passing by its position and if the viewport is less than 768px
    addClassToElement(bodyElement, "fixednav");

    //get body's top position relative to viewport and compare to scrollPos for determine the scrolling direction
    if (document.body.getBoundingClientRect().top < scrollPos) {
      // show fixed nav while scrolling down
      // console.log("DOWN");
      addClassToElement(bodyElement, "fixednavhide");
      removeClassFromElement(bodyElement, "fixednavshow");
    } else {
      // show fixed nav while scrolling up
      // console.log("UP");
      addClassToElement(bodyElement, "fixednavshow");
      removeClassFromElement(bodyElement, "fixednavhide");
    }
    scrollPos = (document.body.getBoundingClientRect()).top; // update new scrollPos
  } else {
    // deactivate fixednav
    removeClassFromElement(bodyElement, "fixednav");
    removeClassFromElement(bodyElement, "fixednavshow");
    removeClassFromElement(bodyElement, "fixednavhide");
  }
});