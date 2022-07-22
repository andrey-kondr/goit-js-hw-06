const categoriesQty = document.querySelectorAll('ul#categories li.item');
console.log(categoriesQty.length);

const title = document.querySelectorAll('h2');

for (const categoryName of title) {
  console.log(categoryName.textContent);
}

const categoryList = document.querySelectorAll("li.item ul");

const firstCategoryLength = categoryList[0].children.length;
console.log(firstCategoryLength);

const secondCategoryLength = categoryList[1].children.length;
console.log(secondCategoryLength);

const thirdCategoryLength = categoryList[2].children.length;
console.log(thirdCategoryLength);