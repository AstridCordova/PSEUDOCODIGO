//Escribe aquí tú código
function potencia() {
	var base = prompt("Ingrese el número base") ;
	var exponente = 3 ;
	var cubo = 1 ;
	while (exponente>0) {
		cubo = cubo * base 
		exponente-- ;
		var cuarta = cubo * base ;	
	}
	alert("El número "+base+" al cubo es "+cubo+"") ;
	alert("El número "+base+" elevado a la cuarta es  "+cuarta+"") ;
}
potencia();

