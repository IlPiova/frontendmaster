const form = document.getElementById("form");
const inputMail = document.getElementById("email-input");
const dismissButton = document.getElementById("dismiss-button");
const succMessage = document.getElementById("success-message");
const succMail = document.getElementById("user-email");

function formSimpleValidator(validity) {
  if (validity.valueMissing) {
    return "Field can't be empty";
  } else if (validity.typeMismatch) {
    return "Please enter a valid email address in the format: name@domain.com";
  } else {
    return "Email non valid";
  }
}

function formSuccess(e) {
  e.preventDefault();
  if (!inputMail.validity.valid) {
    console.log(inputMail);
    inputMail.classList.add("error");
    inputMail.placeholder = formSimpleValidator(inputMail.validity);
  } else {
    succMail.innerText = inputMail.value;
    succMessage.classList.remove("display");
    inputMail.value = "";
  }
}

function dismissMessage() {
  succMessage.classList.add("display");
  inputMail.classList.remove("error");
}

form.addEventListener("submit", formSuccess);
dismissButton.addEventListener("click", dismissMessage);
