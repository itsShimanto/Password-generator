
const range = document.getElementById('range');
const rangeValue = document.querySelector('.range-value');

let passwordLength = parseInt(range.value, 10);
rangeValue.textContent = passwordLength;

range.addEventListener('input', function() {
  passwordLength = parseInt(range.value, 10);
  rangeValue.textContent = passwordLength;
});

//password generation starts
function handleGeneratePassword() {
  const includeUppercase = document.getElementById('upperCase').checked;
  const includeLowercase = document.getElementById('lowerCase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;

  const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
  document.getElementById('password-holder').innerText = password;
}

function generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
  const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%&+_?/";

  let allowedChars = '';
  let password = '';

  allowedChars += includeUppercase ? uppercaseChar : '';
  allowedChars += includeLowercase ? lowercaseChar : '';
  allowedChars += includeNumbers ? numbers : '';
  allowedChars += includeSymbols ? symbols : '';

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

// Copy to clipboard
document.getElementById('password-holder').addEventListener('click', function() {
  const password = document.getElementById('password-holder').innerText;
  navigator.clipboard.writeText(password);
  alert('Password copied to clipboard!');
});
