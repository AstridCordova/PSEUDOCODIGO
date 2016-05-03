//Escribe aquí tu código
function viajes() {
	var alumnos = prompt("Cuantos alumnos viajarán ?");
	var precio = null ;
	if ( alumnos>100 ) {
		precio = 65.00.toFixed(2) ;
		var resultado = precio * alumnos ;
		alert("El pasaje de cada alumno costará "+precio+" y el costo del autobus será de " +resultado.toFixed(2)) ;
	} else if ( alumnos>= 50 && alumnos<=99 ){
		precio = 70.00.toFixed(2) ;
		var resultado = precio * alumnos ;
		alert("El pasaje de cada alumno costará "+precio+" y el costo del autobus será de "+resultado.toFixed(2)) ;
	} else if ( alumnos>=30 && alumnos<=49) {
		precio = 95.00.toFixed(2) ;
		var resultado = precio * alumnos ;
		alert("El pasaje de cada alumno costará "+precio+" y el costo del autobus será de "+resultado.toFixed(2)) ;		
	} else {
		var resultado = 4000.00.toFixed(2) ;
		alert("El viaje costará " +resultado) ;
	}
}	
viajes();