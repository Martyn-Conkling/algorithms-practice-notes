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


/*
example:

str1 = "abc"
str2 = "yabd"

Filling in the table, calculating all of the differences between the 2 substrings...

   "", y, a, b, d
""  0, 1, 2, 3, 4
a   1, 1, 1, 2, 3
b   2, 2, 2, 1, 2
c   3, 3, 3, 2, 2 
*/
//Can save space by just creating 2 arrays for 2 rows, instead of the entire 2D array!
//Can avoid unnessesary reallocation or recreation of the arrays by just swapping the 2 row arrays after finishing the new "currentRow"

 // Swap strings if the first is shorter than the second
 // Keeps our space complexity to the smallest it needs to be O(min(str1.length,str2.length))


//O(nm) time | O(min(n,m)) space where n and m are the lengths of the two input strings
function levenshteinDistance(str1, str2) {

  if (str1.length > str2.length) {
    [str1, str2] = [str2, str1];
  }

  const len1 = str1.length;
  const len2 = str2.length;
  let prevRow = [];
  let currentRow = [];

  // Initialize the first prevRow
  for (let i = 0; i <= len1; i++) {
    prevRow[i] = i;
  }

  // Fill in the "next" row of the table in the for loops below using the currentRow array
  for (let rowIndex = 1; rowIndex <= len2; rowIndex++) {
    currentRow[0] = rowIndex;
    
    for (let col = 1; col <= len1; col++) {
      
      // let insertCost = currentRow[col - 1] + 1;
      // let deleteCost = prevRow[col] + 1;
      // let replaceCost = str1[col - 1] === str2[rowIndex - 1] ? prevRow[col - 1] : prevRow[col - 1] + 1;

      // currentRow[col] = Math.min(insertCost, deleteCost, replaceCost);
      
      
      //Alternatively
      if(str2[rowIndex-1] === str1[col-1]){
        currentRow[col] = prevRow[col-1];
      }else{
        currentRow[col] = 1 + Math.min(currentRow[col-1],prevRow[col], prevRow[col-1])
      }
      
    }

    // Swap the rows for the next iteration
    // Eliminates the need to create a new array for currentRow, I think this is faster 
    [prevRow, currentRow] = [currentRow, prevRow];
  }

  // The last element of prevRow is the answer
  return prevRow[len1];

}
//Same time and space complexity slightly different logic for calculating LD
function lD2(str1,str2){
  if (str1.length > str2.length) {
    [str1, str2] = [str2, str1];
  }

  const len1 = str1.length;
  const len2 = str2.length;
  let prevRow = [];
  let currentRow = [];

  // Initialize the first prevRow
  for (let i = 0; i <= len1; i++) {
    prevRow[i] = i;
  }

  // Fill in the "next" row of the table in the for loops below using the currentRow array
  for (let i = 1; i <= len2; i++) {
    currentRow[0] = i;
    
    for (let j = 1; j <= len1; j++) {
      
      let insertCost = currentRow[j - 1] + 1;
      let deleteCost = prevRow[j] + 1;
      let replaceCost = str1[j - 1] === str2[i - 1] ? prevRow[j - 1] : prevRow[j - 1] + 1;

      currentRow[j] = Math.min(insertCost, deleteCost, replaceCost);
      
      
      //Alternatively
      // if(str2[i-1] === str1[j-1]){
      //   currentRow[j] = prevRow[j-1];
      // }else{
      //   currentRow[j] = 1 + Math.min(currentRow[j-1],prevRow[j], prevRow[j-1])
      // }
      
    }

    // Swap the rows for the next iteration
    // Eliminates the need to create a new array for currentRow, I think this is faster 
    [prevRow, currentRow] = [currentRow, prevRow];
  }

  // The last element of prevRow is the answer
  return prevRow[len1];


}


function testSpeed(func1, func2, runAmount =100000){
  console.time();
   for(let i =0; i < runAmount; i++){
    func1
   }
  console.timeEnd();

  console.time();
   for(let i =0; i < runAmount; i++){
    func2
   }
  console.timeEnd();

  console.time();
  for(let i =0; i < runAmount; i++){
   func1
  }
 console.timeEnd();

 console.time();
   for(let i =0; i < runAmount; i++){
    func2
   }
  console.timeEnd();

  console.time();
  for(let i =0; i < runAmount; i++){
   func1
  }
 console.timeEnd();

 console.time();
   for(let i =0; i < runAmount; i++){
    func2
   }
  console.timeEnd();
}

// testSpeed(levenshteinDistance("asdfjklasdfasdasghfajdhsgfkghfkajdgfkjdgkjadgfskjadhsgfkladsofuoiuwoegaublekluiswg","laskidpoadjdsfgdfkjdlgsdfkhsgdfkdgsfykuwhgkjghwqqweqweekghweqkjgeqkjghweqkjgeqkeqkjghwesdad"),lD2("asdfjklasdfasdasghfajdhsgfkghfkajdgfkjdgkjadgfskjadhsgfkladsofuoiuwoegaublekluiswg","laskidpoadjdsfgdfkjdlgsdfkhsgdfkdgsfykuwhgkjghwqqweqweekghweqkjgeqkjghweqkjgeqkeqkjghwesdad"));


