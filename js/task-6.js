const inputElem = document.querySelector("input");
const btnCreateElem = document.querySelector("[data-create]");
const btnDesElem = document.querySelector("[data-destroy]");
const boxElem = document.querySelector("#boxes");

btnCreateElem.addEventListener("click", createBoxes);
btnDesElem.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  if (inputElem.value >= 1 && inputElem.value <= 100) {
    let size = 30;
    let arr = [];
    boxElem.innerHTML = "";
    for (let i = 1; i <= inputElem.value; i++) {
      const boxes = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
      size += 10;
      arr += boxes;
      console.log(arr);
    }
    boxElem.insertAdjacentHTML("beforeend", arr);
    inputElem.value = "";
  }
}

function destroyBoxes() {
  boxElem.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
