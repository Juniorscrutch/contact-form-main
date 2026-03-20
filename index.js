const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstname = document.getElementById("name");
  const lastname = document.getElementById("subject");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const radios = document.getElementsByName("query-type");
  const checkbox = document.querySelector('input[type="checkbox"]');

  let isValid = true;

  if (firstname.value.trim() === "") {
    alert("Please enter your first name.");
    isValid = false;
  }
  if (lastname.value.trim() === "") {
    alert("Please enter your last name.");
    isValid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    alert("Please enter a valid email address.");
    isValid = false;
  }
  if (message.value.trim() === "") {
    alert("Please enter your message.");
    isValid = false;
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
    alert("Form submitted successfully!");
    form.reset();
  }
});
console.log(typeof firstname.value);
