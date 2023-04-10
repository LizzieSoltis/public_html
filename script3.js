const submitButton = document.getElementById("submit-button");

const password1 = document.getElementById("password1");

const password2 = document.getElementById("password2");

 

submitButton.addEventListener("click", () => {

  if (password1.value.length < 8) {

    alert("Password must be at least 8 characters long.");

  } else if (password1.value !== password2.value) {

    alert("Passwords do not match.");

  } else {

    alert("Passwords matched!");

  }

});
