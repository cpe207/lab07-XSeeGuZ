const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const email_Input = document.querySelector("#email-input");
const submitBtn = document.querySelector("#submit-btn");
const Password_Input = document.querySelector("#password-input");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let EmailOk = false;
  let PasswordOk = false;
  //Check First name and Last name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }
  //Check Last name
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }
  //Check Email
  if (validateEmail(email_Input.value)) {
    email_Input.classList.add("is-valid");
    EmailOk = true;
  } else {
    email_Input.classList.add("is-invalid");
  }
  //Check Password
  if (Password_Input.value.length >= 6) {
    Password_Input.classList.add("is-valid");
    PasswordOk = true;
  } else {
    Password_Input.classList.add("is-invalid");
  }
  if (isFirstNameOk && isLastNameOk && EmailOk && PasswordOk) {
    alert("Registered successfully");
  }
};

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};
email_Input.onkeyup = () => {
  email_Input.classList.remove("is-valid");
  email_Input.classList.remove("is-invalid");
};
Password_Input.onkeyup = () => {
  Password_Input.classList.remove("is-valid");
  Password_Input.classList.remove("is-invalid");
};
