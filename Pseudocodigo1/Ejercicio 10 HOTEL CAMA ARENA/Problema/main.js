//Escribe aquí tu código
function hospedaje() {
	var dias = (prompt("Cuantos dias estuvo aquí?"));
	var costod = (prompt("Cual será el costo por día?"));
	var resultado = dias*costod;
	alert("El hospedaje costará : " +resultado.toFixed(2));
}
hospedaje();