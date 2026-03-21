const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  const firstname = document.getElementById("name");
  const lastname = document.getElementById("subject");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const radios = document.getElementsByName("query-type");
  const checkbox = document.querySelector('input[type="checkbox"]');

  const nameError = firstname.nextElementSibling;
  const lastnameError = lastname.nextElementSibling;
  const emailError = email.nextElementSibling;
  const messageError = message.nextElementSibling;

  const successMessage = document.getElementById("success-message");

  if (firstname.value.trim() === "") {
    nameError.textContent = "This field is required.";
    nameError.style.display = "block";
    firstname.classList.add("error");
    setTimeout(() => {
      nameError.style.display = "none";
      firstname.classList.remove("error");
    }, 2000);
    isValid = false;
  } else {
    nameError.style.display = "none";
    firstname.classList.remove("error");
  }

  if (lastname.value.trim() === "") {
    lastnameError.textContent = "This field is required.";
    lastnameError.style.display = "block";
    lastname.classList.add("error");
    setTimeout(() => {
      lastnameError.style.display = "none";
      lastname.classList.remove("error");
    }, 2000);
    isValid = false;
  } else {
    lastnameError.style.display = "none";
    lastname.classList.remove("error");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.display = "block";
    email.classList.add("error");
    setTimeout(() => {
      emailError.style.display = "none";
      email.classList.remove("error");
    }, 2000);
    isValid = false;
  } else {
    emailError.style.display = "none";
    email.classList.remove("error");
  }
  if (message.value.trim() === "") {
    messageError.textContent = "This field is required.";
    messageError.style.display = "block";
    message.classList.add("error");
    setTimeout(() => {
      messageError.style.display = "none";
      message.classList.remove("error");
    }, 2000);
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
    alert("Please select a query type.");
    isValid = false;
  }
  if (!checkbox.checked) {
    alert("consent required.");
    isValid = false;
  }
  if (isValid) {
    successMessage.style.display = "block";

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 2000);

    form.reset();
  }
});
