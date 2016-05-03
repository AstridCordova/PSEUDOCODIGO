//Escribe aquí tu código
function metros() {
	var telam = parseFloat(prompt("Cuantos metros de tela tiene?"));
	var resultado = telam / 0.0254;
	alert("Debera pedir "+resultado.toFixed(2)+" pulgadas de tela");
}
metros();