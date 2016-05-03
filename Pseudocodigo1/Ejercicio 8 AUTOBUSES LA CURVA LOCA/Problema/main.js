//Escribe aquí tu código
function boleto() {
	var kilometros = parseFloat(prompt("Cuantos km recorrerá?"));
	var costokm = parseFloat(prompt("Cual será el costo por km?"));
	var resultado = kilometros*costokm;
	alert("El boleto costará : " +resultado.toFixed(2));
}
boleto();