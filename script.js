// Assignment code here
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var index = Math.floor(Math.random()*letters.length);
var randomLetter = letters[index];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var index = Math.floor(Math.random()*numbers.length, letters.length, specialCharacters.length);
var randomNumber = numbers[index];

var specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var index = Math.floor(Math.random()*specialCharacters.length);
var randomCharacter = specialCharacters[index];


var characterLength = window.prompt("How many characters would you like? You need between 8 and 128.");
var anySpecial = window.confirm("Would you like to include special characters?");
var anyCapital = window.confirm("Would you like capital letters?");
var anyLower = window.confirm("Would you like lowercase letters?");
var anyNumber = window.confirm("Would you like to include numbers?")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword()