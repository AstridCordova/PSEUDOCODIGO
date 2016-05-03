//Escribe aquí tu código
var costo = 0;
function calcularCostoHamburguesa(tipo) {
	tipo=String(prompt("¿Que tipo de hamburguesa desea ? SENCILLAS-DOBLES-TRIPLES"))
	cantidad = parseInt(prompt("Cuántas hamburguesas desea comprar? ")) ;
	switch(tipo.toLowerCase()) {
		case "sencillas":
			costo = (cantidad*20.00)
			break;
		case "dobles":
			costo = (cantidad*25.00)
			break;
		case "triples":
			costo = (cantidad*28.00)
			break;	
	}
	return costo;
}

function calcularRecargo() {
	total=0;
	pago=String(prompt("Pagará con efectivo o tarjeta ?"))
	// var medio_pago = null ;
	// var recargo;
	// var tarjeta;
	// if (medio_pago = tarjeta) {
	// 	recargo = costo * 0.5 ;
	// }
	// return recargo;
	switch (pago.toLowerCase()){
		case "tarjeta":
		total=(0.5*costo) + costo
		break;
		case "efectivo":
		total=costo;
		break;
	}
	return alert(total);
}

var opcion=true;
function calcularCostoTotal() {
	
	do {
		// var tipo = prompt("Que tipo de hamburguesa desea ? SENCILLAS-DOBLES-TRIPLES");
		// calcularCostoHamburguesa(tipo) ;
		opciones=String(prompt("1) Tipos de hamburguesa"+ "\n" + "2)Para pagar" + "\n" + "3) Pulse 0 para salir"))

		switch(opciones){
			case "1": 
				alert(calcularCostoHamburguesa())
				break;
			case "2": 
				calcularRecargo();
				break;
			case "0":
				opcion=false;
				break;
		}
	} while(opcion)
}

calcularCostoTotal();
// 	do {
// 		var pago = prompt("Pagará con efectivo o tarjeta ?");
// 		var medio_pago = calcularRecargo(pago); 
// 	} while( medio_pago == null ) ;

// 	var costo_total = cantidad * costo_unitario * medio_pago ;
// 	var costo_unitario = costo_total / cantidad  ;
	
// 	alert(+costo_total);
// 	alert(+costo_unitario);
// } 
// calcularCostoTotal();