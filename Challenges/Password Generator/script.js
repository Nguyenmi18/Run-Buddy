// create an array of the characters

var symbols = ['!', '#', '$', '%', '&', '?', '@', '[', '='] ;
var lowerCase = ['a','b','c','d','e','f','g','h','i'] ;
var numbers = ['1','2','3','4','5','6','7','8','9'];
var upperCase = ['A','B','C','D','E','F','G'];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// UserInput

function generatePrompts() {

var totLength  = parseInt(prompt("How many characters would you like your password to contain?"));


if (totLength < 8 || totLength > 128) {
 alert (" It is recommended to choose the length of at least 8 characters and no more than 128 characters, please start over ");
 return;
}

 var symbolsConfirm = confirm ("click ok to include special characters !");
 var numberConfirm = confirm ("click ok to including numeric characters!");
 var lowerCaseConfirm = confirm ("click ok to incling lowercase Characters!");
 var upperCaseConfirm = confirm ("click ok to including uppercase characters!");

 
// create an object connect the question with the created array
var question = {
  lengthC: totLength,
  symbolsC : symbolsConfirm,
  lowerCaseC : lowerCaseConfirm,
  uppercaseC : upperCaseConfirm, 
  numbersC: numberConfirm
}

  return question;
};

function random(data){
var index = Math.floor(Math.random() * data.length)

  return data[index];
}

function generatePassword(){

  var choices = generatePrompts()
//create an array that will house the result of potienal characters for our password
  var result = [];

  //store the possible characters of each chosen type
  var possibleChar =[];

  var chosenChar = []


  if(choices.symbolsC){
    possibleChar = possibleChar.concat(symbols)
    chosenChar.push(random(symbols))
  }

  if(choices.lowerCaseC){
    possibleChar = possibleChar.concat(lowerCase)
    chosenChar.push(random(lowerCase))
  }

  if(choices.uppercaseC){
    possibleChar = possibleChar.concat(upperCase)
    chosenChar.push(random(upperCase))
  }

  if(choices.numbersC){
    possibleChar = possibleChar.concat(numbers)
    chosenChar.push(random(numbers))
  }

  for (var i = 0; i < choices.lengthC; i++) {
    var possibleChars = random(possibleChar)
    result.push(possibleChars)
    
  }

  console.log(chosenChar)

return result.join('')

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
