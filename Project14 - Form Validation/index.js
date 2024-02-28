const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const passError2 = document.getElementById("passError2");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    validateName() &&
    validateEmail() &&
    validatePass() &&
    confirmPass() == 0
  ) {
    alert("Form Submitted Succesfully");
  } else {
    passError.innerHTML = "Please Fill the Field";
    passError.previousElementSibling.classList.add("fa-xmark");
    nameError.innerHTML = "Please Fill the Field";
    nameError.previousElementSibling.classList.add("fa-xmark");
    emailError.innerHTML = "Please Fill the Field";
    emailError.previousElementSibling.classList.add("fa-xmark");
    passError2.innerHTML = "Please Enter Password First";
    passError2.previousElementSibling.classList.add("fa-xmark");
  }
});

function validateName() {
  let name = document.getElementById("name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write your Full Name";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  nameError.innerHTML = "";
  nameError.previousElementSibling.style.color = "green";
  nameError.previousElementSibling.classList.add("fa-check");
  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (
    !email.match(
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
    )
  ) {
    emailError.innerHTML = "Enter your valid email";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  emailError.innerHTML = "";
  emailError.previousElementSibling.style.color = "green";
  emailError.previousElementSibling.classList.add("fa-check");
  return true;
}

function validatePass() {
  let pass = document.getElementById("pass").value;
  let pass2 = document.getElementById("pass2").value;

  if (pass.length == 0) {
    passError.innerHTML = "Enter a Strong Password";
    passError.previousElementSibling.classList.add("pass");
    return false;
  }

  if (!pass.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
    passError.innerHTML =
      "Password should contain 1 Uppercase, 1 Lowercase, 1 digit & 1 Alphabet";
    passError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (pass2.length == 0) {
    passError2.innerHTML = "Confirm your password";
    passError2.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (pass2 != pass) {
    passError2.innerHTML = "Password Not matched";
    passError2.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  passError.innerHTML = "";
  passError.previousElementSibling.style.color = "green";
  passError.previousElementSibling.classList.add("fa-check");

  passError2.innerHTML = "";
  passError2.previousElementSibling.style.color = "green";
  passError2.previousElementSibling.classList.add("fa-check");
  return true;
}
