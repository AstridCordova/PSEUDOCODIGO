//Escribe aquí tu código
function bus(tipo_bus) {
	var costo_bus = null ;
	switch(tipo_bus.toUpperCase()) {
		case "A" :
			costo_bus = 2.0.toFixed(1) ;
			break ;
		case "B" :
			costo_bus = 2.5.toFixed(1) ;
			break ;
		case "C" :
			costo_bus = 3.0.toFixed(1) ;
			break ;
		default :
			costo_bus = null ;
			break ;
	}
	return costo_bus ;
}

function personas() {
	if(numero_personas < 20) {
		numero_personas = 20 ;
	}
	return numero_personas ;
 }

function calcular() {
	var numero_personas = parseInt(prompt("Cuantás personas viajarán? ")) ;
	
	do {
		var tipo_bus = prompt("En qué tipo de bus viajará ?") ;
		var costo_bus = bus(tipo_bus) ;
	} while(costo_bus == null) ;

	var kilometros = prompt("Cuantós km recorrerrá?") ;

	var costo_bus_viaje = costo_bus * kilometros * numero_personas ;
	var costo_personas = costo_bus / numero_personas ;

	alert("El costo del bus es " +costo_bus_viaje.toFixed(2)) ;
	alert("Cada persona deberá pagar " +costo_personas.toFixed(2)) ;
}
calcular() ; 

