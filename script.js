// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseOption = "abcdefghijklmnopqrstuvwxyz";
var uppercaseOption = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacterOption = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numericOption = "0123456789";
var optionChoices = [];
var text = "";


function generatePassword() {

  //Getting password length
  var passwordLength = prompt("Enter a password length:");
  // console.log(passwordLength);
  if (passwordLength > 7 && passwordLength < 129) {
    console.log(passwordLength)
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    if (passwordLength < 8) {
      alert("Password Length is less than 8, please enter a value between 8-128")
      generatePassword();
      return;
    }
    else if (passwordLength > 128) {
      alert("Password Length is more than 128, please enter a value between 8-128")
      generatePassword();
      return;
    }
  }
  else {
    alert("Password Length must be a number between 8 and 128, please enter a valid number.")
    generatePassword();
    return;
  }

  //Include lowercase characters
  var lowercase = confirm("Use lowercase characters?");
  console.log(lowercase);
  if (lowercase == true) {
    optionChoices.push(lowercaseOption);
  }
  else {
  }

  //Include uppercase characters
  var uppercase = confirm("Use uppercase characters?");
  if (uppercase == true) {
    optionChoices.push(uppercaseOption);
  }
  else {
  }

  //Include special characters
  var specialCharacters = confirm("Use special characters?");
  if (specialCharacters == true) {
    optionChoices.push(specialCharacterOption);
  }
  else {
  }


  //Include number characters
  var numericCharacters = confirm("Use number characters?");
  if (numericCharacters == true) {
    optionChoices.push(numericOption);
  }
  else {
  }

  for (i = 0; i < passwordLength; i++) {
    var optionsArray = optionChoices[Math.floor(Math.random() * optionChoices.length)];
    var selection = optionsArray.charAt(Math.floor(Math.random() * optionsArray.length));
    text += selection;
  }

}

// Write password to the #password input
function writePassword() {
  // console.log("button clicked")
  optionChoices = [];
  text = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = text;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


