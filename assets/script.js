var generateBtn = document.querySelector('#generate');
// strings for characters in the password
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
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
	}
	// ask is uppercase allowed.
	const upperCaseAllowed = confirm(
		'Use lowercase letters in the new password?'
	);
	// ask if lowercase is allowed.
	const lowerCaseAllowed = confirm(
		'Use lowercase letters in the new password?'
	);
	//ask if numbers are llowed.
	const numbersAllowed = confirm('Use numbers in the new password?');
	// ask if special characters are allowed.
	const symbosAllowed = confirm('Use special characters in the new password?');
}
