//Escribe aquí tu código
function compras() {
	var monto = parseFloat(prompt("Cual es el monto de su compra ?"));
	var dscto = null ;
	if (monto > 2500.00) {
		dscto = monto * 0.15;
		alert("Su descuento será de 15%");
	} else {
		dscto = monto * 0.8; 
		alert("Su descuento será de 8%");
	}
	var resultado = monto - dscto 
	alert("Usted pagará " +resultado);
}
compras()