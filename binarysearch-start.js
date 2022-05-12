/**
	* Scrivere una funzione che ricerchi la prima occorrenza di un determinato
	* numero in una serie di numeri ordinati e restituisca un valore booleano
	* true se presente, false altrimenti. Mostrare il risultato in console.
	*
	* La ricerca deve implementare l'algoritmo di ricerca binaria.
	* Esempio -> https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/06/01125313/image-2.png
	*/


	
	// let newArr=[];
	// let isInFirstHalf;

	function ricercaBinaria (number, orderedArr){
		// for(i=0; i<myArr.length/2;i++){
		// 	newArr.push(orderedArr[i]);
		// }
		// console.log(orderedArr);
		// if (orderedArr.find(number)){
		// 	for(i=0; i<orderedArr.length/2;i++){
		// 		if(orderedArr[i].find(number)){
		// 			console.log("trovato");
		// 		}
		// 	}
		// }

		let numeroDiMezzo = Math.floor(orderedArr.length/2);
		// console.log(orderedArr[numeroDiMezzo]);
		if (orderedArr.length=== 1 && orderedArr[0] != number){
			console.log("false");
			return false;
		}else if (orderedArr.length=== 1 && orderedArr[0] === number) {
			console.log("true");			
			return true;
		}

		if( number === orderedArr[numeroDiMezzo]){
			console.log("true");			
			return true;			
		} else if(number<orderedArr[numeroDiMezzo]){
			return ricercaBinaria(number, orderedArr.slice(0,numeroDiMezzo));
		} else if (number>orderedArr[numeroDiMezzo]){
			return ricercaBinaria(number, orderedArr.slice(numeroDiMezzo+1 , ));
		} 
	}


	ricercaBinaria (11, [1,3,5,6,7,8,9,10,20])





	// isInFirstHalf= .find(number);
	// console.log(isInFirstHalf)			