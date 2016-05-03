//Escribe aquí tu código
function mayor() {
	var a = parseFloat(prompt("Ingrese el primer número")) ;
	var b = parseFloat(prompt("Ingrese el segundo número")) ;
	var c = parseFloat(prompt("Ingrese el tercer número")) ;
	if (a>b && a>c) {
		alert("El número "+a+" es el mayor") ;
	} else if (b>a && b>c) {
		alert("El número "+b+" es el mayor") ;

	} else {
		alert("El número "+c+" es el mayor") ;
	}
}
mayor();