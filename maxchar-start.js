/**
	* Data una stringa, restituisci il carattere che viene ripetuto più volte.
	* Esempio
	* maxChar("abccccccd") => "c"
	* maxChar("apple 12311111") => "1"
	*/

	
	
	function piuOccorrenze (str){

		let myObj={};

		for(i=0;i<str.length;i++)
			if (str[i] in myObj){
				myObj[str[i]] = myObj[str[i]]+1 ;				
			}else{
			myObj[str[i]]= 1;
		}
		let max = 0 ;
		let result;
		for (let key in myObj ) {
			if( myObj[key]>max){
				max=myObj[key];
				result=key;
			} 
		}
		console.log(result)
		return result
	}	

	piuOccorrenze("abccccccd");