
// INPUT FROM USER + RANDOM GENERATE
// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowercaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {

  var password = "";
  var passwordCharacters = "";
  while (true) {
    length = parseInt(prompt("Please choose the length of your password. This needs to be between 8 - 128 characters!"));
    if (length >= 8 && length <= 128) {
      break;
    }
    alert("Please select a numberber between 8 - 128");
  }
  specialCharacters = confirm("Select 'OK' if you would like to include special characters (i.e. !, @, #, $)");
  numbers = confirm("Select 'OK' if you would like to include numbers (i.e. 1, 2, 3 ,4)");
  uppercase = confirm("Select 'OK' if you would like to include uppercase letters (i.e. A, B ,C ,D)");
  lowercase = confirm("Select 'OK' if you would like to include lowercase letters (i.e. a, b, c,)");

  var passwordArray = [];
  if (specialCharacters) {
    passwordArray = passwordArray.concat(special) 
  };
  if (numbers) {
    passwordArray = passwordArray.concat(number) 
  };
  if (lowercase) {
    passwordArray = passwordArray.concat(lowercaseLetter) 
  };
  if (uppercase) {
    passwordArray = passwordArray.concat(uppercaseLetter)
  }
  
    for (var i = 0; i < length; i++) {
      password += passwordArray [Math.floor(Math.random() * passwordArray.length)]
    }
  
    return (password);

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
      console.log (password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);