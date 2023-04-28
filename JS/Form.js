const emailInput = document.getElementById('email');
const form = document.querySelector('form');

function ValidateEmail(emailInput) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailValue = emailInput.value.trim();
  if (emailValue.match(mailformat)) {
    return true;
  } else {
    alert("Adresse email invalide !");
    return false;
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const isEmailValid = ValidateEmail(emailInput);
  if (isEmailValid) {
    form.submit();
  }
});


const dobInput = document.getElementById('dob');

function validateDOB(dobInput) {
  const dobValue = dobInput.value.trim();
  const dobPattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (dobValue.match(dobPattern)) {
    const dateParts = dobValue.split("/");
    const day = parseInt(dateParts[0]);
    const month = parseInt(dateParts[0]); // les mois commencent à 0 dans JavaScript
    const year = parseInt(dateParts[2]);
    const dateObj = new Date(year, month, day);
    if (dateObj && (dateObj.getMonth() == month) && (dateObj.getDate() == day) && (dateObj.getFullYear() == year)) {
      return true;
    }
  }
  return false;
}

document.querySelector('form').addEventListener('submit', function(event) {
  if (!validateDOB(dobInput)) {
    event.preventDefault();
  }
});
