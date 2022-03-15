// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// 15, 13, 11, 9, 7
function generatePassword(){
  //   GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
// WHEN prompted for the length of the password

// write code to ask for a length using a prompt
// I choose a length of at least 8 characters and no more than 128 characters
// use a conditional to check


// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// write code to ask for a length using a prompt or confirms???
// lowercase
// use a conditional to check what the user put in for the input
// uppercase
// use a conditional to check what the user put in for the input
// numeric
// use a conditional to check what the user put in for the input
// special characters
// use a conditional to check what the user put in for the input

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// use a conditional to check what the user put in for the input

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// you will use a loop to generate the password here
// WHEN the password is generated


// THEN the password is either displayed in an alert or written to the page
  return "therandomjumble18478hjasdfnzxcyq!";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
