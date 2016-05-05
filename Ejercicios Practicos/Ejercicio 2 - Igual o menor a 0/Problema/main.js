//Escribe aquí tú código
function cero() {
	var numeros = parseInt(prompt("Cuántos números ingresará? ")) ;
	var j = 0 ;
	var k = 0 ;
	for (var i=1 ; i<=numeros; i++) {
		var cantidad = parseFloat(prompt("Ingrese el número " +i)) ;
		if(cantidad<=0) {
			j = j+1 ;
		}
		else {
			k = k+1 ;
		}
	} 
	alert("menores e iguales a cero "+j+ " \n "+"mayores que cero "+k);
}
cero();