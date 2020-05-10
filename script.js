//Variables for password criteria
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ; 
const lowerCase = "abcdefghijklmnopqrstuvwxyz" ;
var symbols = "!@#$%^&*()_-=+[]{}" ;
var numbers = "0123456789";
let upperCaseArr= upperCase.split("");
let lowerCaseArr= lowerCase.split("");
var numbersArr = numbers.split("");
var symbolsArr= symbols.split("");

// Function for password

function createPassword(){
 var allChars = [];
 var resultPass = "";

 var length = prompt("Enter the number of characters that will be used in your password. Must be between 8-128");

 if(length <8 || length > 128){
     alert("Password must be 8-128 characters. Please submit a new entry with this criteria");
 }
 else{
    if(confirm("Include capital letters in password?")){
        Array.prototype.push.apply(allChars, upperCaseArr);
    }

    if(confirm("Include lower case letters in password?")){
        Array.prototype.push.apply(allChars, lowerCaseArr);
    }

    if(confirm("Include numbers in password?")){
        Array.prototype.push.apply(allChars, numbersArr);
    }

    if(confirm("Include symbols in password?")){
        Array.prototype.push.apply(allChars, symbolsArr);
    }

    if(allChars.length===0){
        alert("You must ters to generate a password!\nPlease start over.");
    }


// Loop to generate password

     else{
         for(var i=0; i<length; i++){
             var random = Math.floor(Math.random()*allChars.length);
             resultPass += allChars[random];
         }
     }
     }

     document.getElementById("password").innerHTML = resultPass;
}
