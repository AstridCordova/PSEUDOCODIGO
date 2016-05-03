//Escribe aquí tu código
function banquetes() {
	var personas = prompt("Cuantas personas comerán hoy ?");
	var precio = null ;
	if ( personas<200 ) {
		precio = 95.00.toFixed(2) ;
	} else if ( personas>= 200 && personas<=300 ){
		precio = 85.00.toFixed(2) ;
	} else  {
		precio = 75.00.toFixed(2) ;
	}
	alert("Cada plato le costará " +precio) ;
	var resultado = precio * personas ;
	alert("El costo total es de " +resultado.toFixed(2)) ;
}	
banquetes();