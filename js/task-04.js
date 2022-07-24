

let counterValue = document.querySelector('#value');
counterValue = 0;

const handleDecrementBtnClick = () => {
    counterValue -= 1;
    document.getElementById("value").textContent = counterValue;
};

const handleIncrementBtnClick = () => {
    counterValue += 1;
    document.getElementById("value").textContent = counterValue;
};

const incrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener("click", handleIncrementBtnClick);

const decrementBtn = document.querySelector('button[data-action="decrement"]');

decrementBtn.addEventListener("click", handleDecrementBtnClick);



