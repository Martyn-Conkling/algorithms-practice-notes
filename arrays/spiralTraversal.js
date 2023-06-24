


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
    if(startingRow !== endingRow){
       result.push(array[endingRow][col]);
    }
   
  }
  //Left side, "Bottom" to "Top" iteration
  for(let row = endingRow-1; row >= startingRow+1; row--){
    //edge case to avoid an extra element being pushed into result for taller odd width spirals
    if(startingColumn !== endingColumn){
       result.push(array[row][startingColumn])
    }
   
  };


  startingRow += 1;
  startingColumn += 1;
  
  endingRow -= 1;
  endingColumn -= 1;
  
  }
  return result;

}