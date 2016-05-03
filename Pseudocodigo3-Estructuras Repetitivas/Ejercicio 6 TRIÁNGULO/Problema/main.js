//Escribe aquí tú código
function pitagoras() {
	for(a=1;a<=500;a++){
		for(b=1;b<=500;b++){
			for(c=1;c<=500;c++){
				if(c*c===a*a+b*b){
					document.write("ternas de pitarogas:"+'<br>'+a+'<br>'+b+'<br>'+c+'<br>');
				}	
			}
		}
	}
}
pitagoras();

