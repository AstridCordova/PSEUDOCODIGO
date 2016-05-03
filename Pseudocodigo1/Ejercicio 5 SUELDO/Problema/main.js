//Escribe aquí tu código
function sueldo() {
	var horas = parseFloat(prompt("Cuantas horas trabajaste esta semana?"));
	var pago = parseFloat(prompt("Cual es el pago por horas que recibiras?"));
	var resultado = horas*pago ;
	alert("Esta semana tu sueldo sera "+resultado.toFixed(2)+" soles")
}
sueldo();