function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");

const currentColor = document.querySelector(".color");

const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  currentColor.textContent = color;
  });