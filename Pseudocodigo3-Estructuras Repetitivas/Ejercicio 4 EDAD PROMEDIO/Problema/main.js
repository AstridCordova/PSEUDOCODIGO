//Escribe aquí tú código
function promedio() {
	var suma = 0 ;
	var a = 1 ;
	while (a<=3) {
		var numeros = prompt("Ingrese el numero " +a) ;
		suma = suma + parseInt(numeros) ;
		var promedio = suma / 3 ;
		a++ ;
	}
	alert("El promedio de los 3 numeros es " +promedio.toFixed(3)) ;
}
promedio();

function promedio() {
	var suma = 0 ;
	var a = 1 ; 
	do {
		var numeros = prompt("Ingrese el número" +a) ;
		suma = suma + parseInt(numeros) ;
		var promedio = suma / 3;
		a++
	}
	while ( a<=3 ) ;

	alert("El promedio de los 3 numeros es " +promedio.toFixed(2)) ;
}
promedio(); 

function promedio() {
	var suma = 0 ;
	for (var a = 1 ; a<=3; a++) {
		var numeros = prompt("Ingrese el número " +a) ;
		suma = suma + parseInt(numeros) ;
		var promedio = suma / 3 ;
	}
	alert("El promedio de los 3 números es " +promedio.toFixed(2)) ;
}
promedio();