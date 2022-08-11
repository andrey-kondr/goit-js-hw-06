let counterValue = document.querySelector("#value");
counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const handleDecrementBtnClick = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};

const handleIncrementBtnClick = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};

incrementBtn.addEventListener("click", handleIncrementBtnClick);

decrementBtn.addEventListener("click", handleDecrementBtnClick);