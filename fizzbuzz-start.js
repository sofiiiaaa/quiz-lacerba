/**
	* Scrivere una funzione che mostri in console una serie di numeri da 1 a 100.
	* Per ogni multiplo di 3 dovrà mostrare "Fizz", mentre per ogni multiplo di 5
	* dovrà mostrare "Buzz". Nel caso il numero sia multiplo di entrambi dovrà
	* mostrare "FizzBuzz".
	*/
	
	
	let numeroRandom;
	function fizzbuzz (numeroRandom){
		let result=[];
		// console.log(numeroRandom);
		for(i=0; i<=100;i++){
			let numeroRandom = Math.floor(Math.random()*100 +1);
			if (numeroRandom%15===0){
				result.push("FizzBuzz");
			} else if (numeroRandom%5===0){
				result.push("Buzz");
			} else if (numeroRandom%3===0){
				result.push("Fizz");
			}else{
				result.push(numeroRandom);
			}
		}		
		console.log(result);
		return result;
}

fizzbuzz(numeroRandom);