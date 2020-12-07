var charNum = document.getElementById('charNum');
var upperBox = document.getElementById('charUpper');
var numBox = document.getElementById('numbers');
var symBox = document.getElementById('symbols');
var generateBtn = document.getElementById("generate");
var password = document.getElementById('password');


var char = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var symbols = '!@#$%^&*+?';



// Add event listener to generate button
generateBtn.addEventListener("click", function(e){

    var characters = char;
(numBox.checked) ? characters += num : '';
(symBox.checked) ? characters += symbols : '';
(upperBox.checked) ? characters += upperCase : '';

password.value = writePassword(charNum.value, characters);

});








// Write password to the #password input
function writePassword(l,characters){
    var password = '';
    
        for (let i = 0; i < l; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length))
        
        }
return password;

}
