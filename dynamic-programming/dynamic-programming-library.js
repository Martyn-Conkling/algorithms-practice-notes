//O(nd) time | O(n) space - where n is the target amount and d is the number of coin denominations
function minNumberOfCoinsForChange(n, denoms) {
    // Initializing an Array with Infinity values
    const numCoins = new Array(n + 1).fill(Infinity);
    //Base Case
    numCoins[0] = 0;
  
    for (const denom of denoms) {
      for (let amount = 1; amount < numCoins.length; amount++) {
        if (denom <= amount) {
          numCoins[amount] = Math.min(numCoins[amount], numCoins[amount - denom] + 1);
        }
      }
    }
    return numCoins[n] === Infinity ? -1 : numCoins[n];
  }


// O(n) time | O(1) space - where n is the length of the input array
function maxSubsetSumNoAdjacent(array) {

    if(array.length === 0){return 0;}
    if(array.length === 1){return array[0];}
       
    let first = array[0];
    let second = 0;

    for(let i = 1; i < array.length; i++){
        let current = Math.max(first, second + array[i]);
        second = first;
        first = current;
    } 
    return first;
}