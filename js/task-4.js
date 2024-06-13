const FormElem = document.querySelector(".login-form");

FormElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const user = {
    email: FormElem.elements.email.value.trim(),
    password: FormElem.elements.password.value.trim(),
  };
  if (user.email === "" || user.password === "") {
    alert("All form fields must be filled in");
  }
  FormElem.reset();
  console.log(user);
}
