//Escribe aquí tú código
function cero() {
	var numeros = parseInt(prompt("Cuántos números ingresará? ")) ;
	var j = 0 ;
	var k = 0 ;
	var l = 0 ;
	for (var i=1 ; i<=numeros; i++) {
		var cantidad = parseFloat(prompt("Ingrese el número " +i)) ;
		if(cantidad<0) {
			j = j+1 ;
		}
		else if(cantidad>0) {
			l = l+1 ;
		}
		else {
			k = k+1 ;
		}
	} 
	alert("Menores a cero: "+j+" \n "+"Mayores a cero: "+l+" \n "+"Igual a cero: "+k);
}
cero();