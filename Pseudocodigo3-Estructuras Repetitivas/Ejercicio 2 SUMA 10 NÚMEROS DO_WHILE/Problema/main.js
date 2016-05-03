//Escribe aquí tú código
function suma() {
	var suma = 0 ;
	var a = 1 ;
	do {
		var numeros = prompt("Ingrese número "+a+": ") ;
		suma = suma+parseInt(numeros) ;
		a++ ;
	} 
	while (a <= 10) ; 

	alert("La suma de los números ingresados es: " +suma);
}

suma();