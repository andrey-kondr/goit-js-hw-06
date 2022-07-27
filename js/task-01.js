const categoriesQty = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesQty.length}`);

categoriesQty.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
