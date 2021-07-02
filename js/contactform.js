// Variables declared for different DOM input fields

const form = document.querySelector("form");
const nameInput = form.querySelector(".name-input");
const subjectInput = form.querySelector(".subject-input");
const emailInput = form.querySelector(".email-input");
const phoneInput = form.querySelector(".phone-input");
const messageInput = form.querySelector(".message-input");
const submitBtn = form.querySelector("#submit-btn");

submitBtn.addEventListener("click", (e) => {
  let error = 0;
  // Conditions
  if (nameInput.value === "") {
    alert("name empty");
    e.preventDefault();
    error++;
  }
  if (subjectInput.value === "") {
    alert("subject empty");
    e.preventDefault();
    error++;
  }
  if (emailInput.value === "") {
    alert("email empty");
    e.preventDefault();
    error++;
  }
  if (phoneInput.value === "") {
    alert("phone empty");
    e.preventDefault();
    error++;
  }
  if (messageInput.value === "") {
    alert("message empty");
    e.preventDefault();
    error++;
  }
  if (error === 0) {
    alert("Form submitted successfully! Thank you"); //If no errors
  }
});
