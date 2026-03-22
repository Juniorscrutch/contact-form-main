const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  const firstname = document.getElementById("name");
  const lastname = document.getElementById("subject");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const radios = document.querySelectorAll('input[name = "query-type"]');
  const checkbox = document.querySelector('input[type="checkbox"]');
  const queryGroup = document.getElementById("query-group");

  const nameError = firstname.nextElementSibling;
  const lastnameError = lastname.nextElementSibling;
  const emailError = email.nextElementSibling;
  const messageError = message.nextElementSibling;

  const successMessage = document.getElementById("success-message");
  const radioError = document.getElementById("radio-error");
  const checkboxError = document.getElementById("checkbox-error");

  if (firstname.value.trim() === "") {
    nameError.textContent = "This field is required.";
    nameError.style.display = "block";
    firstname.classList.add("error");
    isValid = false;
  } else {
    nameError.style.display = "none";
    firstname.classList.remove("error");
  }

  if (lastname.value.trim() === "") {
    lastnameError.textContent = "This field is required.";
    lastnameError.style.display = "block";
    lastname.classList.add("error");
    isValid = false;
  } else {
    lastnameError.style.display = "none";
    lastname.classList.remove("error");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.display = "block";
    email.classList.add("error");
    isValid = false;
  } else {
    emailError.style.display = "none";
    email.classList.remove("error");
  }

  if (message.value.trim() === "") {
    messageError.textContent = "This field is required.";
    messageError.style.display = "block";
    message.classList.add("error");
    isValid = false;
  } else {
    messageError.style.display = "none";
    message.classList.remove("error");
  }
  let radioChecked = false;
  radios.forEach((r) => {
    if (r.checked) {
      radioChecked = true;
    }
  });
  if (!radioChecked) {
    radioError.textContent = "Please select a query type ";
    radioError.style.display = "block";
    queryGroup.classList.add("error");
    isValid = false;
  } else {
    radioError.style.display = "none";
    queryGroup.classList.remove("error");
  }
  if (!checkbox.checked) {
    checkboxError.textContent =
      "To submit this form, please consent being contacted";
    checkboxError.style.display = "block";
    checkbox.closest(".form-group").classList.add("error");
    isValid = false;
  } else {
    checkboxError.style.display = "none";
    checkbox.closest(".form-group").classList.remove("error");
  }
  if (isValid) {
    successMessage.style.display = "block";

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 4000);

    form.reset();
  }
});
