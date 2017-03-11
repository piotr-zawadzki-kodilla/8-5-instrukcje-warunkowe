var a = 5,
	b = 7,
	value = (a * a) + (2 * a * b) - (b * b);

console.log("Wynik: " + value);
if (value < 0)
	console.log("Wynik ujemny")
else if (value > 0)
	console.log("Wynik dodatni")
else
	console.log("Wynik równy 0");
