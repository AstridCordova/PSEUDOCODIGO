//Escribe aquí tú código
function pares() {
	for (var a=0; a<=100; a++) {
		if (a%2==0) {
			document.write (+a+ ": es par <br>") ;
		} else {
			document.write (+a+ ": es impar <br>") ;
		}
	}
}
pares()