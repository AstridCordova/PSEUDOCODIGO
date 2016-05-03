//Escribe aquí tu código
function galones() {
	var litros = parseFloat(prompt("Cuantos litros de leche se produjeron hoy?"));
	var resultado = litros / 3.785;
	alert("Usted vendera hoy "+resultado.toFixed(0)+" galones de leche");
}
galones();