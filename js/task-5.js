function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnData = document.querySelector(".change-color");

const spanColor = document.querySelector(".color");


btnData.addEventListener("click", changeColor);

function changeColor(event) {
  event.preventDefault();

  const backColor = document.body.style.backgroundColor = getRandomHexColor();
 
  console.log(backColor);
  spanColor.textContent = backColor;
  spanColor.style.backgroundColor = "white";
}



