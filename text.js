const loginPopup = document.getElementById('loginPopup');
const loginButton = document.getElementById('loginButton');
const closeButton = document.getElementById('closeButton');

loginButton.addEventListener('click', function() {
  loginPopup.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  loginPopup.style.display = 'none';
});

/* Retrieve the value from the text field
var usernameInput = document.getElementById("username");
var username = usernameInput.value;

// Display the username under the profile picture
var usernameDisplay = document.createElement("div");
usernameDisplay.innerHTML = username;
usernameDisplay.classList.add("username");
document.querySelector(".profile").appendChild(usernameDisplay);*/