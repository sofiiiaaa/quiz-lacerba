/**
	* Data una stringa, restituire una stringa con i caratteri in ordine inverso.
	* Esempio:
	* reverse("ciao") => "oaic"
	*/
	
	function reverseStr (string){
		let result;
		result= string.split("").reverse();
		console.log(result.join(""));
		return result.join("");
	}


	reverseStr ("ciao")