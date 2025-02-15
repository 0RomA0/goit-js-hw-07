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
    createBoxes(amount);
    inputValue.value = '';
  }
  return;
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let step = 30;
  
    for (let i = 0; i < amount; i++) {
      
      const newDiv = document.createElement("div");

      newDiv.style.backgroundColor = getRandomHexColor();
      newDiv.style.width = `${step}px`;
      newDiv.style.height = `${step}px`;
      step += 10;

      divBoxes.append(newDiv);
    }

  }


function destroyBoxes() {
  divBoxes.innerHTML = "";
}




