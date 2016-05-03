//Escribe aquí tu código
function llamada() {
	var minutos = (prompt("Cuantos minutos duro la llamada?"));
	var costom = (prompt("Cual será el costo por minuto?"));
	var resultado = minutos*costom;
	alert("La llamada tiene un costo de : " +resultado.toFixed(2));
}
llamada();