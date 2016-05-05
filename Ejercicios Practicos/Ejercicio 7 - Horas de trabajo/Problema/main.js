//Escribe aquí tú código
function hora() {
	var pago_por_hora = parseFloat(prompt("Cuál será el pago por hora?")) ;
	var suma = 0 ; 
	var dias = 1 ;
	while(dias<=6) {
		var horas = parseFloat(prompt("Día # "+dias+"\n"+"Cuántas horas trabajo hoy?")) ;
		var suma = suma + horas ;
		var sueldo = suma * pago_por_hora ;
		dias++ ;
	}
	document.write("Se le pagará por hora: "+pago_por_hora+" <br>") ;
	document.write("Usted trabajo "+suma+" horas <br>") ;
	document.write("Sueldo semanal: " +sueldo.toFixed(2)) ;
}
hora() ;