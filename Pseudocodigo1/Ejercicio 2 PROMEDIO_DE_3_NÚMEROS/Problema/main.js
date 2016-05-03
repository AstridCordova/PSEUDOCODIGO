//Escribe aquí tu código
function promedio() {
	var a = parseFloat(prompt("Ingrese el número 1: "));
	var b = parseFloat(prompt("Ingrese el número 2: "));
	var c = parseFloat(prompt("Ingrese el número 3: "));
	var resultado = (a+b+c) / 3;
	alert("El promedio de estos número es :" +resultado.toFixed(2));
}
promedio();