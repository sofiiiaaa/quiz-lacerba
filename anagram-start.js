/**
	* Scrivere una funzione che controlli se due parole sono anagrammi e mostrare
	* il risultato in console.
	* Esempio
	* isAnagram("cinema", "iceman") => true
	* isAnagram("manuel", "giraffa") => false
	*/



	
	
	function anagram(primaStr, secondaStr) {
	// let anagramma= false;
	// for (i=0; i<primaArray.length; i++ ){
	// 	if(secondaArray.includes(primaArray[i]) && primaArray.length===secondaArray.length && primaArray.includes(secondaArray[i])){
	// 		anagramma= true;
	// 	}	else{
	// 		anagramma= false;
	// 	}	
	// }
	// if (anagramma == true){
	// 	console.log("le due stringhe sono anagrammi");
	// } else {
	// 	console.log("le due stringhe non sono anagrammi");

	// }
	
	let primaArr = primaStr.split("");
	let secondaArr = secondaStr.split("");
	let result= primaArr.sort().join("")===secondaArr.sort().join("");
	console.log(result);
	return result;
}

anagram("cinema","iceman");