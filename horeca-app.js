var input;

var frisAantal = 0;
var bierAantal = 0;
var wijnAantal = 0;

var frisTotaal = 0;
var bierTotaal = 0;
var wijnTotaal = 0;
var prijsTotaal = 0;

var frisP = 1.80;
var bierP = 2.00;
var wijnP = 2.50;

var keuze;
var aantalBB;
var aantalSchalen8;
var aantalSchalen16;
var schalenTotaal8 = 0;
var schalenTotaal16 = 0;

var schaal8 = 3.50;
var schaal16 = 6.00;

start();

//Functie om het te starten
function start(){
	while(input != "stop"){
		input = prompt("Wil je fris | bier | wijn | snacks");

		if (input.toLowerCase().trim() == "fris") {
			frisAantal = frisAantal + parseInt(prompt("Hoeveel fris wil je?"));
		}
		else if(input.toLowerCase().trim() == "bier"){
			bierAantal = bierAantal + parseInt(prompt("Hoeveel bier wil je?"));
		}
		else if(input.toLowerCase().trim() == "wijn"){
			wijnAantal = wijnAantal + parseInt(prompt("Hoeveel wijn wil je?"));
		}
		else if(input.toLowerCase().trim() == "snacks"){
			snacks();
		}
		else if(input.toLowerCase().trim() == "stop"){
			bedrag();
		}
	}
}

//Functie voor snacks
function snacks(){
	aantalBB = prompt("Wil je een schaal van 8 of 16 bitterballen?");

	if (aantalBB == "8") {
		aantalSchalen8 = prompt("Hoeveel schalen van 8 wil je?");
		schalenTotaal8 = aantalSchalen8 * schaal8;
	}
	else if(aantalBB == "16"){
		aantalSchalen16 = prompt("Hoeveel schalen van 16 wil je?");
		schalenTotaal16 = aantalSchalen16 * schaal16;
	}
}

//Functie om de bon te krijgen
function bedrag(){
	if (frisAantal != "0") {
		frisTotaal = frisAantal * frisP;
		document.write("Je hebt " + frisAantal + " fris besteld van \u20ac1.80 = \u20ac" + frisTotaal);
		document.write("<br>");
	}

	if (bierAantal != "0") {
		bierTotaal = bierAantal * bierP;
		document.write("Je hebt " + bierAantal + " bier besteld van \u20ac2.00 = \u20ac" + bierTotaal);
		document.write("<br>");
	}

	if (wijnAantal != "0") {
		wijnTotaal = wijnAantal * wijnP;
		document.write("Je hebt " + wijnAantal + " wijn besteld van \u20ac2.50 = \u20ac" + wijnTotaal);
		document.write("<br>");
	}	

	if (aantalSchalen8 != null){
		document.write("Je hebt " + aantalSchalen8 + " schalen van 8 besteld van \u20ac3.50 = \u20ac" + schalenTotaal8);
		document.write("<br>");
	}

	if (aantalSchalen16 != null){
		document.write("Je hebt " + aantalSchalen16 + " schalen van 16 besteld van \u20ac6.00 = \u20ac" + schalenTotaal16);
		document.write("<br>");
	}

	prijsTotaal = prijsTotaal + wijnTotaal + bierTotaal + frisTotaal + schalenTotaal8 + schalenTotaal16;
	document.write("----------------------------------");
	document.write("<br>");
	document.write("<br>");
	document.write("Het totale bedrag = \u20ac" + prijsTotaal);
}