var naam;
var jaar;

while(naam != 'stop'){
	vraagNaamLeeftijd();
}

function vraagNaamLeeftijd(){
	naam = prompt('wat is je naam?');
	jaar = prompt('hoe oud ben je?');

	if (naam != 'stop') {
		document.write('Hallo '+ naam + ', je leeftijd is '+ jaar +' jaar' );
		document.write("<br>");
	}
}