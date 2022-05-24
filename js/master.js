// GLOBAL VARIABLES:
let dynamicSize = 20; //refactor later if possible

// https://stackoverflow.com/questions/2170923/whats-the-easiest-way-to-call-a-function-every-5-seconds-in-jquery
function dynamicHeader() {

  /* code previously used to fetch size. No longer used because of dynamic sizing based on window
  const header = document.querySelector('.header');
  const fontSize = getComputedStyle(header).getPropertyValue("font-size");
  console.log(fontSize);

  let dynamicSize = parseInt(fontSize.substring(0, fontSize.length-2));
  */

  if (dynamicSize >= 5) {
    growing = false;
    dynamicSize = 4.9;
  } else if (dynamicSize <= 3) {
    growing = true;
    dynamicSize = 3.1;
  }

  if (growing === true) {
    dynamicSize += 0.1;
  } else {
    dynamicSize -= 0.1;
  }

  document.getElementsByClassName("header")[0].style.fontSize=dynamicSize + "vh";
  // console.log(dynamicSize); used to debug sizing
}

let dynamicInterval = setInterval(dynamicHeader, 40); // sets interval for the funny title element

// saves recipe to the list of recipes
function saveRecipe() {

}

// clears all form inputs
function clearInput() {

}

function getWidth() { // currently not used, but may come in handy later
  let width = window.innerWidth;
  return width;
}
