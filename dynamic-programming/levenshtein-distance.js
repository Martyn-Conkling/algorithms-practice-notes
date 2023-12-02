// First Solution
function levenshteinDistance1(str1, str2) {
  /* Levenshtein Distance
  This is a dynamic programming question.

  Prompt:
  Write a function that takes in two strings and returns the minimum number of edit operations 
  that need to be performed on the first string to obtain the second string.
  There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.
  
  */
/* Thinking about solving this algorithm conceptually:
When I look at 2 different strings and try to calculate in my head the number of edit operations needed to be performed, 
I am basically scanning the first string for characters that match characters in the 2nd string.

To "look" at this programatically, I should probably split both strings into 2 arrays,
so I can first compare the lengths of the different strings, and any characters that are already in both strings
I also want to look for chuncks of letters that are exactly the same between the two, but set up this math in such a way, 
that it is utilizing some sort of dynamic logic, to avoid the huge exponential number of calculations and checks that a brute force iterative solution would require.



In the hint, they are recommending that I first try:  "building a two-dimensional array 
of the minimum numbers of edits for pairs of substrings of the input strings."

"Let the rows of the array represent substrings of the second input string str2",
So I believe this means that each row will be 1 longer than the length of str2 because we are starting at an empty value comparison for 0,0,

"Let the first row represent the empty string" which I think means, the first row represents the Levenshtein Distance between an empty string, and all of the following substrings of str2 .
"Let each row 'i' thereafter represent the substrings of str2 from index 0 to i, with i excluded.""
"Let the columns similarly represent the first input string str1"

If I understand this hint correctly, I think they are saying I should create a 2D array like a table like what I show below:

2DArray
row starts at 0 and will increment up to the length of str2
col starts at 0 and will increment up to the length of str 1,
all the other entries will be set to null

example:

str1 = "abc"
str2 = "yabd"

      "", y, a, b, d
2D = [
""    [0, 1, 2, 3, 4],
a     [1, null, null, null, null],
b     [2, null, null, null, null],
c     [3, null, null, null, null]
   ];


//Filling in the table, calculating all of the differences between the 2 substrings...

   "", y, a, b, d
""  0, 1, 2, 3, 4
a   1, 1, 1, 2, 3
b   2, 2, 2, 1, 2
c   3, 3, 3, 2, 2 


//spent some time trying to figure out the pattern that could be condensed into an equation
//had to watch the video for the conceptual solution to get the equation for calculating the LD based on this type of a table,



if(str1[r-1] === str2[c-1]){
  E[r][c] = E[r-1][c-1]
  // going back diagonally
}
else{
  E[r][c] = 1+ min (E[r][c-1], E[r-1][c], E[r-1][c-1] )
}

This is really cool, because basically there is a simple algorithm for calculating levenshtein distance between 2 strings using a table,
Which just requires you to check for equivalency of individual characters r*c times.

after creating the first row and the first column of the table,
I will run through r*c calculations, where r is str1.length, and c is str2.length,

This will limit  my time complexity to O(r*c) or O(str1.length*str2.length), and I am not sure about how to calculate the space complexity scaling for the 2D array, 
the 2D array will have r*c elements to be stored in the 2D array, so the space complexity scales up linearly with O(r*c) where r and c are the lengths of the 2 strings

  */

  
    let LDArray= [];
  
    let startingRow = [];
    for (let i = 0; i <= str2.length; i++){
      startingRow.push(i);
    }
    
    LDArray.push(startingRow);
    
    //startingRow should now contain the values 0 through str2.length
    //Next we create all the other rows, filling in their values with null
    for (let i = 1; i <= str1.length; i++){
      let row = [];
      row.push(i);
      for(let j = 1; j <= str2.length; j++){
        row.push(null);
      }
      LDArray.push(row);
    }
    
  
    let rowIndex = 1;
    while(rowIndex <= str1.length){
      let colIndex = 1;
      while(colIndex <= str2.length){
        if(str1[rowIndex-1] === str2[colIndex-1]){
        // This sets the current location equal to the value that is diagonally up and to the left
          LDArray[rowIndex][colIndex] = LDArray[rowIndex-1][colIndex-1]; 
        }
        else{
          LDArray[rowIndex][colIndex] = 1 + Math.min(LDArray[rowIndex][colIndex-1], LDArray[rowIndex-1][colIndex], LDArray[rowIndex-1][colIndex-1] )
        }
        colIndex++
      }
      rowIndex++;
    }
  
    return LDArray[str1.length][str2.length]; 
}
  

//Improving my solution code for efficiency and readibility 
 
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

//O(nm) time | O(n*m) space where n and m are the lengths of the two input strings
function levenshteinDistance2(str1, str2) {
    //I can probably save time by just creating the first row, 
    //and the first element value in the following rows, before starting my algorithm calculations
    let LDArray= [];
    let firstRow = [];
  
    for (let i = 0; i <= str2.length; i++){
      firstRow.push(i);
    }
    LDArray.push(firstRow);
    
    //firstRow should now contain the values 0 through str2.length
    
    let r = 1;
    while(r <= str1.length){
     LDArray.push([r])
      let c = 1;
      while(c <= str2.length){
        if(str1[r-1] === str2[c-1]){
        // This sets the current location of LDArray[r][c] equal to the value that is diagonally up and to the left
          LDArray[r][c] = LDArray[r-1][c-1]; 
        }else{ LDArray[r][c] = 1 + Math.min(LDArray[r][c-1], LDArray[r-1][c], LDArray[r-1][c-1])}
        c++;
      }
      r++;
    }
    return LDArray[str1.length][str2.length];

  }

//Optimized for space complexity to only store 2 rows in the LDArray, saving space!
//O(nm) time | O(min(n,m)) space where n and m are the lengths of the two input strings
function levenshteinDistance3(str1, str2) {
    // Finds the shorter of the 2 strings
    let shorterString;
    let longerString;
    if(str1.length <= str2.length){
        shorterString = str1;
        longerString = str2;
    }else{
        shorterString = str2;
        longerString = str1;
    }

    let LDArray= new Array(0);
    let firstRow = new Array(0);
  
    for (let i = 0; i <= shorterString.length; i++){
      firstRow.push(i);
    }
    LDArray.push(firstRow);
    
    //firstRow should now contain the values 0 through shorterString.length
    
    let r = 1;
    while(r <= longerString.length){
     let newRow = [r];
     LDArray.push(newRow)
      let c = 1;
      while(c <= shorterString.length){
        if(longerString[r-1] === shorterString[c-1]){
        // This sets the current location of LDArray[1][c] equal to the value that is diagonally up and to the left
          LDArray[1][c] = LDArray[0][c-1]; 
        }else{ LDArray[1][c] = 1 + Math.min(LDArray[1][c-1], LDArray[0][c], LDArray[0][c-1])}
        c++;
      }
      LDArray.shift();
      r++;
    }
  
    return LDArray[0][shorterString.length];


}

//Optimized even further to avoid needing to create new arrays
//O(nm) time | O(min(n,m)) space where n and m are the lengths of the two input strings
function levenshteinDistance4(str1, str2) {
    //Can save space by just creating 2 arrays for 2 rows, instead of the entire 2D array!
    //Can avoid unnessesary reallocation or recreation of the arrays by just swapping the 2 row arrays after finishing the new "currentRow"

 // Swap strings if the first is shorter than the second
 // Keeps our space complexity to the smallest it needs to be O(min(str1.length,str2.length))
  if (str1.length > str2.length) {
    [str1, str2] = [str2, str1];
  }

  const len1 = str1.length;
  const len2 = str2.length;
  let prevRow = new Array(len1 + 1);
  let currentRow = new Array(len1 + 1);

  // Initialize the first prevRow
  for (let i = 0; i <= len1; i++) {
    prevRow[i] = i;
  }

  // Fill in the rest of the table
  for (let i = 1; i <= len2; i++) {
    currentRow[0] = i;

    for (let j = 1; j <= len1; j++) {
      /*
      let insertCost = currentRow[j - 1] + 1;
      let deleteCost = prevRow[j] + 1;
      let replaceCost = str1[j - 1] === str2[i - 1] ? prevRow[j - 1] : prevRow[j - 1] + 1;

      currentRow[j] = Math.min(insertCost, deleteCost, replaceCost);
      */
      
      //Alternatively
      if(str2[i-1] === str1[j-1]){
        currentRow[j] = prevRow[j-1];
      }else{
        currentRow[j] = 1 + Math.min(currentRow[j-1],prevRow[j], prevRow[j-1])
      }
      
    }

    // Swap the rows for the next iteration
    // Eliminates the need to create a new array for currentRow, I think this should be faster
    [prevRow, currentRow] = [currentRow, prevRow];
  }

  // The last element of prevRow is the answer
  return prevRow[len1];

   
}