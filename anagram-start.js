/**
	* Scrivere una funzione che controlli se due parole sono anagrammi e mostrare
	* il risultato in console.
	* Esempio
	* isAnagram("cinema", "iceman") => true
	* isAnagram("manuel", "giraffa") => false
	*/


	const primaParola = "manuel";
	const secondaParola = "giraffa";
	let anagramma= false;

	const primaArray = primaParola.split("");
	const secondaArray = secondaParola.split("");


	for (i=0; i<primaArray.length; i++ ){
		if(secondaArray.includes(primaArray[i]) && primaArray.lenght===secondaArray.lenght && primaArray.includes(secondaArray[i])){
			anagramma= true;
		}	else{
			anagramma= false;
		}	
	}
	if (anagramma == true){
		console.log("le due stringhe sono anagrammi");
	} else {
		console.log("le due stringhe non sono anagrammi");

	}