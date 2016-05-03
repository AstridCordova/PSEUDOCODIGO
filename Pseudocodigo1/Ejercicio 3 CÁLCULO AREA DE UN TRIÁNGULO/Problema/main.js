//Escribe aquí tu código
function area() {
	var b = parseFloat(prompt("Ingrese el número de base :"));
	var h = parseFloat(prompt("Ingrese el número de altura :"));
	var resultado = (b*h) / 2;
	alert("El área del triángulo es : " +resultado);
}
area()