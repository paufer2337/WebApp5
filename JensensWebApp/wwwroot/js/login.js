function initializeLogin() {
  const loginButton = document.getElementById("login-button");
  loginButton.addEventListener("click", handleLoginClick);
}

function handleLoginClick(event) {
  // Prevent default action to ensure the image does not disappear
  event.preventDefault();

  const loginDialog = promptUserForPassword();
  processLoginAttempt(loginDialog);
}

function getButtons() {
  let buttons = Array.from(document.getElementsByClassName("btn btn-primary"));
  return buttons;
}

function showButtons(buttons) {
  buttons.forEach((button) => {
    button.style.display = "block";
  });
}

function hideButtonsExceptFirst(buttons) {
  buttons.forEach((button, index) => {
    const excludedButtonIndex = 1;
    if (index > excludedButtonIndex) {
      button.style.display = "none";
    }
  });
}

function processLoginAttempt(loginDialog) {
  const buttons = getButtons();
  if (checkPasswordvalidity(loginDialog)) {
    showButtons(buttons);
  } else {
    console.log("Incorrect password provided by the user.");
    hideButtonsExceptFirst(buttons);
  }
}

function checkPasswordvalidity(password) {
  return password !== null && password === "123";
}

function promptUserForPassword() {
  const loginDialog = prompt("Ange lösenord");
  console.log("User input password: ", loginDialog);
  return loginDialog;
}