const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstIngredientEl = document.createElement('li');
firstIngredientEl.classList.add("item");
firstIngredientEl.textContent = ingredients[0];
console.log(firstIngredientEl);

const secondIngredientEl = document.createElement('li');
secondIngredientEl.classList.add('item');
secondIngredientEl.textContent = ingredients[1];
console.log(secondIngredientEl);

const thirdIngredientEl = document.createElement('li');
thirdIngredientEl.classList.add('item');
thirdIngredientEl.textContent = ingredients[2];
console.log(thirdIngredientEl);

const fourthIngredientEl = document.createElement('li');
fourthIngredientEl.classList.add('item');
fourthIngredientEl.textContent = ingredients[3];
console.log(fourthIngredientEl);

const fifthIngredientEl = document.createElement('li');
fifthIngredientEl.classList.add('item');
fifthIngredientEl.textContent = ingredients[4];
console.log(fifthIngredientEl);

const sixthIngredientEl = document.createElement('li');
sixthIngredientEl.classList.add('item');
sixthIngredientEl.textContent = ingredients[5];
console.log(sixthIngredientEl);

const ingredientsListEl = document.querySelector('ul#ingredients');

ingredientsListEl.prepend(
  firstIngredientEl,
  secondIngredientEl,
  thirdIngredientEl,
  fourthIngredientEl,
  fifthIngredientEl,
  sixthIngredientEl
);
console.log(ingredientsListEl);