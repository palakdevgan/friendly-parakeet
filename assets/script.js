//Get password length and applied validations such as avoid blank,null,string values and
//number should be between 8 to 128.
var getPasswordLength=function(){
  var length ="";

  while (length === "" || length === null || parseInt(length) < 8 || parseInt(length) > 128 || isNaN(length)) {
    length = prompt("Please choose the length of Password between 8 to 128 characters?");
  }
  console.log("Your Password's length is " + length);
  return length;
}

//Function for generating password with atleast one character type
function generatePassword() {
var passwordLength=getPasswordLength();
var isLowercase=false;
var isUppercase=false;
var isNumeric =false;
var isSpecial=false;
var chars="";
while(isLowercase === false && isUppercase === false && isNumeric === false && isSpecial ===false){
window.alert("Please select atleast one character type from the following:");
isLowercase = window.confirm("Do you want to include Lowercase Letters?");
console.log("isLowercase: "+isLowercase);
if (isLowercase){
  chars += "abcdefghijklmnopqrstuvwxyz";
  //console.log(chars);
}
isUppercase = window.confirm("Do you want to include Uppercase Letters?");
console.log("isUppercase: "+isUppercase);
if (isUppercase){
  chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //console.log(chars);
}
isNumeric = window.confirm("Do you want to include Numeric Values?");
console.log("isNumeric: "+isNumeric);
if (isNumeric){
  chars += "0123456789";
  //console.log(chars);
}
isSpecial = window.confirm("Do you want to include Special Characters?");
console.log("isSpecial: "+isSpecial);
if (isSpecial){
  chars += "!@#$%^&*()_+?><:{}[]";
  //console.log(chars);
}
}

var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);

    password += chars.substring(randomNumber, randomNumber + 1);
  }

return password;

}

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
