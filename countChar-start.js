/**
	* Scrivere una funzione che conti le ricorrenze dei caratteri all'interno di
	* una parola. La funzione dovrà restituire un'oggetto con chiave la lettera e
	* come valore il conteggio. Mostrare il risultato in console.
	* Esempio
	* countChar("hello") => {h: 1, e: 1, l: 2, o: 1}
	*/


	// let numberOccurrences= 0;
	// let myObj = {};
	
	// let word ="hello";


function piuOccorrenze (string){

	let myObj ={};
	for(i=0;i<string.length;i++){
		if(string[i] in myObj){
			myObj[string[i]]= myObj[string[i]]+1;
		}else{
			myObj[string[i]]=1;
		}
	}
	console.log(myObj)
	return myObj
}

	piuOccorrenze("hello");
