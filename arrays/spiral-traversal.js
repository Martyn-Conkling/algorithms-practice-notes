/*
Algorithm Prompt
write a function that takes in an N x M two dimensional array and returns a one dimensional array of all the array's elements in clockwise spiral order.
Clockwise Spiral order starts at the top left corner of the two dimensional array, goes to the right, then procedes in a clockwise spiral pattern all the way 
until every element has been visited

Example Input
array =[
       [1,2,3,4],
       [12,13,14,5],
       [11,16,15,6],
       [10,9,8,7]
       ];

Example Output
output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

*/

/*
Conceptual notes, 
For doing a spiral traversal, we can simply the complexity of the process by doing a perimeter traversal,
and then after each completed perimeter traversal moving inwards to the next perimeter

note, this approach will create 2 edge cases in the following code (which are accounted for) for odd width taller squares, and odd width wider squares
*/

function spiralTraverse(array) {
  // Write your code here.
  let result = [];
 

  let startingRow = 0;
  let startingColumn = 0;
  let endingRow = array.length-1;
  let endingColumn = array[0].length-1;

  while(startingRow <= endingRow && startingColumn <= endingColumn){
    
  //Top side, left to right iteration
  for(let col = startingColumn; col <= endingColumn; col++){
    result.push(array[startingRow][col])
  }
  //Right side, "Top" to "Bottom" iteration
  for(let row = startingRow + 1; row <= endingRow; row++){
    result.push(array[row][endingColumn])
  }
  //Bottom side, right to left iteration
  for(let col = endingColumn -1; col >= startingColumn; col--){
    //edge case to avoid an extra element being pushed into result for wider odd height spirals
    if(startingRow === endingRow){
        break;
    }
   
    result.push(array[endingRow][col]);
    
   
  }
  //Left side, "Bottom" to "Top" iteration
  for(let row = endingRow-1; row >= startingRow+1; row--){
    //edge case to avoid an extra element being pushed into result for taller odd width spirals
    if(startingColumn === endingColumn){
        break;
    }
    
    
    result.push(array[row][startingColumn])
    
   
  };


  startingRow += 1;
  startingColumn += 1;
  
  endingRow -= 1;
  endingColumn -= 1;
  
  }
  return result;

}