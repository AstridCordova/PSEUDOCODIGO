//Escribe aquí tú código
function suma() {
	var suma = 0 ;
	for (var a = 1; a<=10; a++) {
		var numeros = prompt("Ingrese número "+a+": ") ;
		suma = suma+parseInt(numeros) ;
	} 
	alert("La suma de los números ingresados es: " +suma);
}
suma()