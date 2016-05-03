//Escribe aquí tu código
function promedio() {
	var a = parseFloat(prompt("Ingrese la primera nota: "));
	if (a>10 || a<1) {
	alert("Ingrese nota entre 1 y 10");
	a = parseFloat(prompt("Ingrese la primera nota: "));
	}
	var b = parseFloat(prompt("Ingrese la segunda nota: "));
	if (b>10 || b<1) {
	alert("Ingrese nota entre 1 y 10");
	b = parseFloat(prompt("Ingrese la segunda nota: "));
	}
	var c = parseFloat(prompt("Ingrese tercera nota: "));
	if (c>10 || c<1) {
	alert("Ingrese nota entre 1 y 10");
	c = parseFloat(prompt("Ingrese la tercera nota: "));
	}
	var resultado = (a+b+c) / 3;
	alert("El promedio de estos número es :" +resultado.toFixed(1));
	if(resultado>=6)
 		document.write("Usted APROBO");
	else
 		document.write("Usted DESAPROBO");
}

promedio();


