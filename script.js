var generateBtn = document.querySelector('#generate');
// strings for characters in the password
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '`~!@#$%^&*-_=+[]{};:,<.>?()';

//Generat function
function generatePassword() {
	var desiredPassLength = Math.round(
		prompt(
			'How many characters long would you like your password to be (between 8 and 128)?'
		)
	);
	//is the input within the desired range 8-128
	if (desiredPassLength >= 8 && desiredPassLength <= 128) {
		var confirmedPassLength = desiredPassLength;
	} else {
		alert('Please enter a number between 8 and 128.');
		throw new Error('User did not choos a lenth btween 8 and 128');
	}
	// ask if uppercase allowed.
	const upperCaseAllowed = confirm(
		'Use uppercase letters in the new password?'
	);
	// ask if lowercase is allowed.
	const lowerCaseAllowed = confirm(
		'Use lowercase letters in the new password?'
	);
	//ask if numbers are llowed.

	const numbersAllowed = confirm('Use numbers in the new password?');
	// ask if special characters are allowed.

	const symbolsAllowed = confirm('Use special characters in the new password?');

	// make a string of the selected characters made by the user
	//starting with the string they will printed to
	var availableCharacters = '';
	if (lowerCaseAllowed === true) {
		availableCharacters = availableCharacters.concat(lowerCase);
	}
	if (upperCaseAllowed === true) {
		availableCharacters = availableCharacters.concat(upperCase);
	}
	if (numbersAllowed === true) {
		availableCharacters = availableCharacters.concat(numbers);
	}
	if (symbolsAllowed === true) {
		availableCharacters = availableCharacters.concat(symbols);
	}
	// get random character form the array and add that to a string for each of the choices

	var newPassword = '';

	for (let i = 0; i < confirmedPassLength; i++) {
		newPassword = newPassword.concat(
			availableCharacters[
				Math.floor(Math.random() * availableCharacters.length)
			]
		);
	}
	return newPassword;
}

//upon button click
function writePassword() {
	//calls generatePassword and prints it
	var password = generatePassword();
	var passwordText = document.querySelector('#password');
	passwordText.value = password;
	console.log(password);
}
generateBtn.addEventListener('click', writePassword); // button with event listener
