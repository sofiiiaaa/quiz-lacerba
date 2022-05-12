/**
	* Scrivere una funzione che controlli se una data stringa è palindroma
	* oppure no. Mostrare il risultato in console.
	* isPalindrome("anna") => true
	* isPalindrome("manuel") => false
	*/



	// let secondaStr= primaStr.sort((a,b) => a<b? -1 : 1);
	
	function stringaPalindroma (primaStr){
		let reversedStringArr= [];
		let result="";


		reversedStringArr= primaStr.split("").reverse().join("");
		// console.log(reversedStringArr);
		console.log(primaStr===reversedStringArr);
		return primaStr===reversedStringArr;

		
	}

	stringaPalindroma("anna")