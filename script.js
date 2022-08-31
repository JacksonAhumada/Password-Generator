// Assignment code here
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperLetters = ['A', 'B', 'C']
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

function getPasswordOptions() {
var characterLength = parseInt(
  prompt("How many characters would you like? You need between 8 and 128."),
  8
);
if (Number.isNaN(characterLength)) {
  alert("The password length must be a number.");
  return null;
}
if (characterLength < 8) {
  alert("Password must be at least 8 characters.");
  return null;
}
if (characterLength > 128) {
  alert("Password must be less than 128 characters.");
  return null;
}
var anySpecial = confirm("Would you like to include special characters?");
var anyCapital = confirm("Would you like capital letters?");
var anyLower = confirm("Would you like lowercase letters?");
var anyNumber = confirm("Would you like to include numbers?");
if (
  anySpecial === false && 
  anyCapital === false &&
  anyLower === false &&
  anyNumber === false 
) {
  alert("You must include at least one character type.");
  return null
}
var passwordOptions = {
  characterLength: characterLength,
  anySpecial: anySpecial,
  anyCapital: anyCapital,
  anyLower: anyLower,
  anyNumber: anyNumber,
};
return passwordOptions;
};

function randomize(arr) {
var randomIndex = Math.floor(Math.random() * arr.length);
var randomEl = arr[randomIndex];
return randomEl;
};

function passwordGenerate() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guarenteedCharacters = [];
  if (!options) return null; 
  if (options.anySpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guarenteedCharacters.push(randomize(specialCharacters));
  }
  if (options.anyCapital) {
    possibleCharacters = possibleCharacters.concat(upperLetters);
    guarenteedCharacters.push(randomize(upperLetters));
  }
  if (options.anyLower) {
    possibleCharacters = possibleCharacters.concat(lowerLetters);
    guarenteedCharacters.push(randomize(lowerLetters));
  }
  if (options.anyNumber) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guarenteedCharacters.push(randomize(numbers));
  }
  for (var i = 0; i < options.characterLength; i++) {
    var possibleCharacter = randomize(possibleCharacters);
    result.push(possibleCharacter);
  }
  for (var i = 0; i < guarenteedCharacters.length; i++) {
    result[i] = guarenteedCharacters[i]
  };
  return result.join("")
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword()