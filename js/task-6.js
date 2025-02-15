function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const inputValue = document.querySelector("input");

createButton.addEventListener("click", () => {
  const amount = Number(inputValue.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes(); 
    createBoxes(amount);
    inputValue.value = "";
  }
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let step = 30;
  const fragment = document.createDocumentFragment(); //  document fragment для оптимізації

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${step}px`;
    newDiv.style.height = `${step}px`;
    step += 10;
    fragment.appendChild(newDiv);
  }

  divBoxes.appendChild(fragment); // Додаємо всі елементи одним викликом
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}





