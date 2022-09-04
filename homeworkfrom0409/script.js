function shior0409() {
	let num7 = parseFloat(prompt('enter a nam.'));
	let num6 = parseFloat(prompt('enter a nam.'));
	let num8 = prompt('-or+ or / or *');
	if (num8 == '-') {
		alert(num7 - num6);
	} else if (num8 == '+') {
		alert(num7 + num6);
	} else if (num8 == '*') {
		alert(num7 * num6);
	} else if (num8 == '/') {
		alert(num7 / num6);
	} else {
		alert('you dont use the right');
	}
}
