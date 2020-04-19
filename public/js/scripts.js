const inputs = document.querySelectorAll("div.signup form input");
const form = document.querySelector("div.signup form");

function validateInput(input) {
  if (input.type === "email") {
    const validate = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    return validate.test(input.value);
  }

  if (input.value.length <= 0) {
    return false;
  }

  return true;
}

inputs.forEach(function (input) {
  input.addEventListener("blur", function (event) {
    if (!validateInput(event.target)) {
      return event.target.parentElement.classList.add("error");
    }

    return event.target.parentElement.classList.remove("error");
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
});
