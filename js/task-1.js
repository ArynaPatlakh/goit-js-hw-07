const LiElem = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${LiElem.length}`);

const Elem = document.querySelector("#categories");

const ItemElem = document.querySelectorAll(".item");

for (let i = 0; i < ItemElem.length; i++) {
  const liElem = Elem.children[i];
  const HElem = liElem.children[0];
  console.log(`Category: ${HElem.textContent}`);

  const CategorUlElem = HElem.nextElementSibling;
  const CategorLiElem = CategorUlElem.childElementCount;
  console.log(`Elements: ${CategorLiElem}`);
}
