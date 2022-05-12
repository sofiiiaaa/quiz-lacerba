/**
	* Dato un numero intero restituire il numero inverso
	* Esempio
	* reverseInt(15) => 51
	* reverseInt(981) => 189
	* reverseInt(-90) => -9
	* reverseInt(-15) => -51
	*/

	let newNumber;
	let resultStringfy;
	let result;

	function reverseNumber (number) {
		newNumber= number.toString().split("");
			result=newNumber.reverse();
			console.log(result);

			if(number<0){
				newNumber.splice(0,0,"-");
				newNumber.pop();
				console.log(result);
				resultStringfy= result.join("");
				console.log(result);

				// }				
			} else if(result[0]==="0"){
				newNumber.splice(0,0,"");
				resultStringfy= result.join("");

			} else{
				resultStringfy= result.join("");
				console.log(result)
			}

			console.log(parseInt(resultStringfy, 10));
			return parseInt(resultStringfy, 10);
	}

	reverseNumber(0)