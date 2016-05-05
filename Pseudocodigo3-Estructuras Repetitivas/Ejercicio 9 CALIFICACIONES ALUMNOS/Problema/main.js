//Escribe aquí tú código
function promedio() {
	var personas = 40 ;
	var suma = 0 ;
	var i = 1 ;
	while (i<=personas) {
		var notas = parseFloat(prompt("Ingrese la nota "+i)) ;
		suma = suma + notas ;
		i++ ;
	}
	var promedio = suma / personas ;
	alert(promedio.toFixed(2));
}
promedio();