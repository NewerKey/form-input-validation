const form = document.getElementById("form");
const password1Element = document.getElementById("password1");
const password2Element = document.getElementsById("password2");

const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;

//Using Constraint API
function validateForm() {
  isValid = form.checkValidity();

  message.textContent = "Please fill out all fields.";
  message.style.color = "red";
  messageContainer.style.borderColor = "red";
}

function processFormData(e) {
  e.preventDefault();
  // Validate form
  validateForm();
}

//Event Listener
form.addEventListener("submit", processFormData);
