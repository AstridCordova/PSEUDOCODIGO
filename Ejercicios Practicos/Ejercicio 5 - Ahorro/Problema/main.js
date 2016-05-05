//Escribe aquí tú código
function ahorro() {
	var i = 1 ;
	var ahorro = 0 ;
	while(i<=12) {
	var mes = parseInt(prompt("Mes # "+i+" \n Cuánto ahorrará?")) ;
	ahorro = ahorro + mes ; 
	i++ ;
	alert("Vas ahorrando :"+ahorro+"") ;
	} 
}	
ahorro();
