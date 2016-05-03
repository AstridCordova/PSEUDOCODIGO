//Escribe aquí tu código
function presupuesto() {
	var metros = parseFloat(prompt("Cuantos metros cuadrados debera pintar?"));
	var pago = parseFloat(prompt("Cuanto cobrará por metro cuadrado ?"))
	var resultado = (metros*metros) * pago ;
	alert("Usted deberá cobrar "+resultado.toFixed(2));
}
presupuesto();