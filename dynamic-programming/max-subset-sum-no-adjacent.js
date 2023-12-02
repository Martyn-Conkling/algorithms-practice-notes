function maxSubsetSumNoAdjacent(array) {
	
    // Solution with O(n) space and time
  // 	if(array.length === 0){
  // 		return 0;
  // 	}
      
  // 	let maxSums = [];
  // 	maxSums[0] = array[0];
  // 	maxSums[1] = Math.max(array[0],array[1]);
  // 	for(let i = 2; i < array.length; i++){
  // 		maxSums[i] = Math.max(maxSums[i-1], (maxSums[i-2] + array[i]) );
  // 	}
  // 	let lengthofArray = array.length;
  // 	return maxSums[lengthofArray-1];
  // }
      
      //Solution with O(1) space and O(n) time where n is the length of the input array
      if(array.length === 0){
           return 0;
      }
      if(array.length === 1){
          return array[0];
      }
      
      let first = array[0];
      let second = 0;
      for(let i = 1; i < array.length; i++){
          let current = Math.max(first, second + array[i]);
          second = first;
          first = current;
      }
      
      return first;
  }