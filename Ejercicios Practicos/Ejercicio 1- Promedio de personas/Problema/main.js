//Escribe aquí tú código
function promedio() {
	var personas = parseFloat(prompt("Ingrese el número de personas")) ;
	var suma = 0 ;
	var i = 1 ; 
	while(i<=personas) {
		var estatura = parseFloat(prompt("Ingrese la estutara "+i)) ;
		suma = suma + estatura ;
		i++ ;
	}
	var promedio = suma / personas ;
	alert(promedio.toFixed(2)) ;
}
promedio();