// GLOBAL VARIABLES:
let dynamicSize = 20; //refactor later if possible
let initialRecipe = JSON.stringify(
{
  "title": "Grilled Cheese Sandwiches",
  "ingredients": "4 slices white bread; 3 tablespoons butter, divided; 2 slices Cheddar cheese",
  "directions": "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
});
let recipeArray = [initialRecipe];

// example recipe sourced from https://www.allrecipes.com/recipe/23891/grilled-cheese-sandwich/

// https://stackoverflow.com/questions/2170923/whats-the-easiest-way-to-call-a-function-every-5-seconds-in-jquery
function dynamicHeader() {

  /* code previously used to fetch size. No longer used because of dynamic sizing based on window
  const header = document.querySelector('.header');
  const fontSize = getComputedStyle(header).getPropertyValue("font-size");
  console.log(fontSize);

  let dynamicSize = parseInt(fontSize.substring(0, fontSize.length-2));
  */

  if (dynamicSize >= 2.7) {
    growing = false;
    dynamicSize = 2.65;
  } else if (dynamicSize <= 1.7) {
    growing = true;
    dynamicSize = 1.75;
  }

  if (growing === true) {
    dynamicSize += 0.05;
  } else {
    dynamicSize -= 0.05;
  }

  document.getElementsByClassName("header")[0].style.fontSize=dynamicSize + "vw";
  // console.log(dynamicSize); used to debug sizing
}

if (document.title === "Home") {
  let dynamicInterval = setInterval(dynamicHeader, 40); // sets interval for the funny title element
}

// takes in the recipeArray and spits it into the site
// https://stackoverflow.com/questions/20673959/how-to-add-new-li-to-ul-onclick-with-javascript
function refreshRecipes() {

  for (let recipe of recipeArray) {
    addRecipeToList(recipe);
  }
}

// nested function, adds specific recipe (rather than the array) to the list
function addRecipeToList(recipe) {
  let parsedRecipe = JSON.parse(recipe);

  for (let step in parsedRecipe) {
    let recipes = document.getElementById("recipes");
    let recipeElement = document.createElement("li");

    recipeElement.setAttribute("id", "recipePart")
    recipeElement.appendChild(document.createTextNode(parsedRecipe[step]));
    recipes.appendChild(recipeElement);
  }
}

// saves recipe to the list of recipes
function saveRecipe() {
  let newRecipe = {
    "title": "",
    "ingredients": "",
    "directions": ""
  }
  let recipeElems = document.getElementsByClassName("boxes");
  let noEmptyFields = true;

  newRecipe.title = recipeElems[0].value;
  newRecipe.ingredients = recipeElems[1].value;
  newRecipe.directions = recipeElems[2].value;

  stringNewRecipe = JSON.stringify(newRecipe);

  for (const elem of recipeElems) {
    noEmptyFields = (noEmptyFields && (elem.value !== ""));
    console.log((noEmptyFields && (elem.value !== "")));
    console.log((noEmptyFields && (elem.value === "")));
  }

  if (noEmptyFields) {
    console.log(noEmptyFields);
    addRecipeToList(stringNewRecipe);
    recipeArray.push(stringNewRecipe);
  }

  clearInput();
}

// clears all form inputs
function clearInput() {
  let recipeElems = document.getElementsByClassName("boxes");

  for (const elem of recipeElems) {
    elem.value = "";
  }
}

function deleteAll(recipeArray) {
  recipeArray = [];
  let recipes = document.getElementById("recipes");
  recipes.innerHTML = "";
}

function getWidth() { // currently not used, but may come in handy later
  let width = window.innerWidth;
  return width;
}
