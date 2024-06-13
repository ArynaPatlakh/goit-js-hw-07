const bodyElem = document.querySelector("body");
const btnColorElem = document.querySelector(".change-color");
const spaneElem = document.querySelector(".color");

btnColorElem.addEventListener("click", onBtnColorClick);

function onBtnColorClick() {
  const myClass = getRandomHexColor();
  bodyElem.style.backgroundColor = myClass;
  spaneElem.textContent = myClass;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
