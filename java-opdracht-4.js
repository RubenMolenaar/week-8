var tafel = prompt('Welke tafel wil je?');

function tafels(getal){
	for (i = 1; i <= 10; i++){
		var uitkomst = (getal * i);
		document.write(i + ' x ' + getal + ' = ');
		document.write(uitkomst);
		document.write("<br>");
	}
}

tafels(tafel);