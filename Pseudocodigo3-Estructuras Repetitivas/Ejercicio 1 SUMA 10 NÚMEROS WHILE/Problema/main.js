//Escribe aquí tú código
/*function suma() {
	var cantidadn = prompt("Cuantos números deseas sumar? ") ;
	var suma = 0 ;
	var a = 1 ;
	while (a <= cantidadn) {
		var numeros = prompt("Ingrese número "+a+": ") ;
		suma = suma+parseInt(numeros) ;
		a++ ;
	}

	alert("La suma de los "+cantidadn+" números ingresados es: " +suma);
}

suma()
*/


function sumadiez() {
	var suma = 0 ;
	var a = 1 ;
	while (a<=10) {
		var numeros = prompt("Ingrese el numero " +a) ;
		suma = suma + parseInt(numeros) ;
		a++ ;
	}
	alert("La suma de los 10 números es " +suma) ;
}
sumadiez() ;