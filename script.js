const form = document.getElementById("form");
const password1Element = document.getElementById("password1");
const password2Element = document.getElementsById("password2");

const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

function processFormData(e) {
  console.log(e);
}

//Event Listener
form.addEventListener("submit", processFormData);
