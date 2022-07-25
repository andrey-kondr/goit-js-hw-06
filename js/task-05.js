const nameInputEl = document.querySelector("#name-input");

const nameOutputEl = document.querySelector("#name-output");

const typeName = (event) => {
    if (event.currentTarget.value === 0) {
        return nameOutputEl.textContent;
    }
      nameOutputEl.textContent = event.currentTarget.value;
}

const currentNameEl = nameInputEl.addEventListener("input", typeName);


