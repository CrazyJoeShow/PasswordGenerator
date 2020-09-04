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
}
