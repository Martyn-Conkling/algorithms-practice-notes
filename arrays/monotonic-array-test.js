/*
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
An array is said to be monotonic if its elements from left to right are entirely non-increasing or entirely non-decreasing

*/

function isMonotonic(array) {
    // Write your code here.
    let nonIncreasing = true;
    let nonDecreasing = true;
  
    let index = 1;
    
    //I like this solution because it can exit the loop before you finish iterating over the array if it fails to be monotonic
    while((nonIncreasing || nonDecreasing) && index < array.length ){
  
      if(array[index-1] > array[index]){
        nonDecreasing = false;
      }
      if(array[index-1] < array[index]){
        nonIncreasing = false;
      }
        index++;
    }
  
    return (nonIncreasing || nonDecreasing);
    
  
    
  }

  //alternatively

  function isMonotonic2(array){
    // edge case where the array is only 2 elements long (will always be monotonic)
    if(array.length <= 2) return true;

    let direction = array[1] - array[0];
    for(let i = 2;  i < array.length; i++){

        if(direction === 0){
            direction = array[i] - array[i-1];
            continue;
        }
        if (breaksDirection(direction, array[i-1], array[i])){
            return false;
        }
    }
    return true;

  }


  function breaksDirection(direction, prevInt, currInt){
    const difference = currInt - prevInt;
    // checks to see that integers are increasing if "direction" is positive aka increasing
    if(direction > 0){ return difference < 0;};

    //checks to see if the integers are decreasing, this will evaluate to true or false
    return (difference > 0);
  }



  //If you want to iterate all the way through the array you can do an approach with a for loop
