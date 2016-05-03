//Escribe aquí tú código
function multiplicacion() {
	var numero = prompt("Ingrese el número que desea multiplicar");
	var a = 0 ;
	while (a<=12) {
		var multiplicar = a * numero ;
		document.write(a+ " * " +numero+ " = " +multiplicar+ "<br>" ) ;
		a++ ;
	}
	 
}
multiplicacion();