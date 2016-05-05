function tikitaka () {
	var ventas = parseInt(prompt("Cuántas ventas se realizaron hoy ?")) ;
	var j = 0 ;
	var k = 0 ;
	var l = 0 ;
	var suma = 0 ;
	var suma_uno = 0 ;
	var suma_dos = 0 ;
	for(var i=1; i<=ventas; i++) {
		var pago_venta = parseFloat(prompt("Venta # " +i)) ;
		if(pago_venta>1000) {
			j += 1 ;
			suma += pago_venta ;
		}
		else if(pago_venta>500 && pago_venta<=1000) {
			k += 1 ;
			suma_uno += pago_venta ;
		}
		else {
			l += 1 ;
			suma_dos += pago_venta ;
		}
		var venta_total = suma + suma_uno + suma_dos ;
	}
	document.write("# de ventas mayores de $1000 : "+j+" <br>") ;
	document.write("Se vendio el valor de: "+suma.toFixed(2)+" <br>") ;
	document.write("# de ventas entre $500 a $1000 : "+k+" <br>") ;
	document.write("Se vendio el valor de: "+suma_uno.toFixed(2)+" <br>") ;
	document.write("# de ventas menores de $500 : "+l+" <br>") ;
	document.write("Se vendio el valor de: "+suma_dos.toFixed(2)+" <br>") ;
	document.write("Venta total : " +venta_total) ;

	
}
tikitaka() ;