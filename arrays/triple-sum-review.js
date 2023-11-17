function threeNumberSum(array, targetSum) {
let tripletArray = [];
	let sortedArray = array.sort((a, b) => a - b);
	// console.log(sortedArray);
	for (let i = 0; i <= array.length - 3; i++){
		for(let j = i+1; j <= array.length -2; j++){
			for(let k = j+1; k <=array.length -1; k++){
				if(sortedArray[i] + sortedArray[j] + sortedArray[k] === targetSum){
					let targetThree = [sortedArray[i], sortedArray[j], sortedArray[k]];
					// console.log(targetThree);
					tripletArray.push(targetThree);
					
				}
			}
		}
	}
	
	return tripletArray;
	

}


function threeNumberSumOptimal(array, targetSum) {
  
	array.sort((a,b) => a - b);
	const tripletsArray = []
	//we can stop at the 3rd to last element, because we still will have to add two elements together for a test sum
	for (let i = 0; i < array.length -2; i++){
		//we create our left and right pointers
		let left = i + 1;
		let right = array.length - 1;
		while (left < right){
			const currentSum = array[i] + array[left] + array[right];
			if (currentSum === targetSum){
				tripletsArray.push([array[i], array[left], array[right]]);
				//after pushing our passing triplet sum to the tripletsArray, we need to move our pointers to continue this while loop test
				left++
				right--
			} else if (currentSum < targetSum){
				left++
			} else if (currentSum > targetSum){
				right--
			}
			//these else if statements move our pointers to larger values for the left, and smaller values for the right, 
			//in case our current sum is too small or large respectively
		
		}//end of while loop
	}//end of for loop
	
	return tripletsArray;
}
