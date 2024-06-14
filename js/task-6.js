const inputElem = document.querySelector("input");
const btnCreateElem = document.querySelector("[data-create]");
const btnDesElem = document.querySelector("[data-destroy]");
const boxElem = document.querySelector("#boxes");

btnCreateElem.addEventListener("click", () => {
  const amount = inputElem.value;
  if (amount >= 1 && amount <= 100) {
    boxElem.innerHTML = "";
    createBoxes(amount);
  }
});
btnDesElem.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  let str = "";
  for (let i = 1; i <= amount; i++) {
    const boxes = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
    str += boxes;
  }
  boxElem.insertAdjacentHTML("beforeend", str);
  amount = "";
}

function destroyBoxes() {
  boxElem.innerHTML = "";
  inputElem.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
