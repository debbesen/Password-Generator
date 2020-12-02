

var includeCharacterAmount = document.getElementById('charAmountRange');
var includeLowerCaseElement = document.getElementById('lowerCase');
var includeUpperCaseElement = document.getElementById('upperCase');
var includeNumbersElement = document.getElementById('numbers');
var includeSymbolElement = document.getElementById('symbols');
var generateBtn = document.querySelector("#generate");




const UPPERCASE_CHAR_CODES = charCodeArray(65, 90)
const LOWERCASE_CHAR_CODES = charCodeArray(97, 122)
const NUMBER_CHAR_CODES = charCodeArray(48, 57)
const SYMBOL_CHAR_CODES = charCodeArray(33, 47).concat


characterAmountNumber.addEventListener("input", syncCharacterAmount)


$(".form").on("submit", e => {
    e.preventDefault()
    var characterAmount = includeCharacterAmount.value
    var includeUppercase = includeUppercaseElement.checked
    var includeLowercase = includeLowercaseElement.checked
   var includeSymbols = includeSymbolsElement.checked
   var includeNumbers = includeNumbersElement.checked

    const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
    $("#passwordResults").text(password);
})



// Write password to the #password input
function writePassword() {
    const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
    $("#passwordResults").text(password);
    
    let charCodes = LOWERCASE_CHAR_CODES
        if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
        if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
        if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
        if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
        
        
        const passwordCharacters = []
        for (let i = 0; i < charAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))

}
return passwordCharacters.join(" ")

}

function charCodeArray(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array;


function syncCharacterAmount(e) {
    const value = e.target.value
    charAmountRange.value = value
};



    // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(writePassword);