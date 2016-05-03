//Escribe aquí tú código
function potencia() {
	var base = prompt("Ingrese el número base") ;
	var exponente = prompt("Ingrese el exponente") ;
	var potencia = 1 ;
	while (exponente>0) {
		potencia = potencia * base ;
		exponente-- ;
	}
	alert("El resultado de "+base+" a la "+exponente+" es "+potencia+"");
}
potencia();