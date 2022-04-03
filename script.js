const form = document.getElementById("form");
const password1Element = document.getElementById("password1");
const password2Element = document.getElementById("password2");

const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

//Using Constraint API
function validateForm() {
  isValid = form.checkValidity();

  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }

  if (password1Element.value === password2Element.value) {
    passwordsMatch = true;
    password1Element.style.borderColor = "green";
    password2Element.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1Element.style.borderColor = "red";
    password2Element.style.borderColor = "red";
    return;
  }

  // if form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function processFormData(e) {
  e.preventDefault();
  // Validate form
  validateForm();
}

//Event Listener
form.addEventListener("submit", processFormData);
