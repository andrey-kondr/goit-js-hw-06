const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

const changeSizeEl = (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
};

const getRandomSizeEl = inputEl.addEventListener("change", (changeSizeEl));