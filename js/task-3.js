const InputElem = document.querySelector("#name-input");
const SpanElem = document.querySelector("#name-output");

InputElem.addEventListener("input", onInputChange);

function onInputChange() {
  const name = InputElem.value.trim();
  if (name === " " || name === "") {
    SpanElem.textContent = "Anonymous";
  } else {
    SpanElem.textContent = InputElem.value;
  }
}
