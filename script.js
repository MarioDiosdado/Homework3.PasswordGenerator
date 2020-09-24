// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var lenghtOfPassword = prompt("How long do you want your password to be? (bettween 8 and 128 chars)");

  if(lenghtOfPassword < 8 || lenghtOfPassword > 128) {
    alert("Password must be between 8 and 128 characters. Try again.");
    var noPassword = "No password for you!";
    return noPassword;
  } else {

  var lowercase = confirm("Do you want your password to include lower case characters?");
  var uppercase = confirm("Do you want your password to include uppercase characters?");
  var numeric = confirm("Do you want your password to include numeric characters?");
  var specialCharacters = confirm("Do you want your password to include special characters?");
  
  

  if(lowercase && uppercase && numeric && specialCharacters) {
    var finalPassword = everything(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(lowercase && uppercase && numeric && !specialCharacters) {
    var finalPassword = lowerAndUpperAndNumeric(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(lowercase && uppercase && !numeric && !specialCharacters) {
    var finalPassword = lowerAndUppercase(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(lowercase && !uppercase && !numeric && !specialCharacters) {
    var finalPassword = onlyLowerCase(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(!lowercase && uppercase && !numeric && !specialCharacters) {
    var finalPassword = onlyUpper(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(lowercase && uppercase && numeric && !specialCharacters) {
    var finalPassword = lowerAndUpperAndNumeric(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(lowercase && uppercase && !numeric && specialCharacters) {
    var finalPassword = lowerAndUpperandSpecial(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(lowercase && uppercase && numeric && !specialCharacters) {
    var finalPassword = upperAndNumericAndSpecial(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(lowercase && uppercase && numeric && !specialCharacters) {
    var finalPassword = lowerAndUpperAndNumeric(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(lowercase && !uppercase && numeric && !specialCharacters) {
    var finalPassword = lowerAndNumeric(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(lowercase && !uppercase && !numeric && specialCharacters) {
    var finalPassword = lowerAndSpecial(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(!lowercase && !uppercase && numeric && !specialCharacters) {
    var finalPassword = onlyNumeric(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(!lowercase && !uppercase && !numeric && specialCharacters) {
    var finalPassword = onlySpecial(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(!lowercase && uppercase && numeric && !specialCharacters) {
    var finalPassword = upperAndNumeric(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(!lowercase && uppercase && !numeric && specialCharacters) {
    var finalPassword = upperAndSpecial(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else if(!lowercase && !uppercase && numeric && specialCharacters) {
    var finalPassword = numericAndSpecial(lenghtOfPassword);
    console.log("The password is " + finalPassword);
    return finalPassword;
  } else {
    var final = "No password for you!"
    return final;
  }



  
  //lowercase
  function everything(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
      var result = result + letters.charAt(Math.floor(Math.random() * 70));
    }
    return result;
  }

  function onlyLowerCase(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "abcdefghijklmnopqrstuvwxyz";
      var result = result + letters.charAt(Math.floor(Math.random() * 26));
    }
    return result;
  }

  function onlyUpper(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var result = result + letters.charAt(Math.floor(Math.random() * 26));
    }
    return result;
  }

  function onlyNumeric(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "0123456789";
      var result = result + letters.charAt(Math.floor(Math.random() * 10));
    }
    return result;
  }

  function onlySpecial(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "!@#$%^&*";
      var result = result + letters.charAt(Math.floor(Math.random() * 8));
    }
    return result;
  }

  function lowerAndUppercase(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var result = result + letters.charAt(Math.floor(Math.random() * 52));
    }
    return result;
  }

  function lowerAndUpperAndNumeric(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var result = result + letters.charAt(Math.floor(Math.random() * 62));
    }
    return result;
  }

  function lowerAndUpperandSpecial(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
      var result = result + letters.charAt(Math.floor(Math.random() * 60));
    }
    return result;
  }

  function lowerAndNumericAndSpecial(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
      var result = result + letters.charAt(Math.floor(Math.random() * 44));
    }
    return result;
  }

  function upperAndNumericAndSpecial(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
      var result = result + letters.charAt(Math.floor(Math.random() * 52));
    }
    return result;
  }

  function upperAndNumeric(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var result = result + letters.charAt(Math.floor(Math.random() * 36));
    }
    return result;
  }

  function lowerAndNumeric(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "abcdefghijklmnopqrstuvwxyz0123456789";
      var result = result + letters.charAt(Math.floor(Math.random() * 36));
    }
    return result;
  }

  function lowerAndSpecial(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*";
      var result = result + letters.charAt(Math.floor(Math.random() * 34));
    }
    return result;
  }

  function upperAndSpecial(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
      var result = result + letters.charAt(Math.floor(Math.random() * 34));
    }
    return result;
  }

  function numericAndSpecial(a){
    var result = "";
    for(var i = 0; i < a; i++){
      var letters = "0123456789!@#$%^&*";
      var result = result + letters.charAt(Math.floor(Math.random() * 18));
    }
    return result;
  }

}
}
