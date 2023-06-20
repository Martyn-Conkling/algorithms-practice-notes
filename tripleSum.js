//You are given an unsorted array of randomly selected unique integers
//example:

let myArray = [12,3,1,2,4,27,8,23,13,9,11];
// This means that:
/*
- there will be no duplicates of the same integer in this array
- integers will be randomly chosen in size (could be -1000 or 1000)
- you are allowed to have negative integers
- the array will only have maximum of 100 elements, and no fewer than 3 elements

*/

/*
You are also given an argument called "targetSum"
which will be an integer.

Searching through the array you need to find, all possible UNIQUE SUMS of 3 Integers that add up to the target sum


*/

/*

these sums of 3 integers, should be returned in a 2 dimentional array
example: 

[[12,11,2],...]

[[13,11,1],...]

or an empty array if there are no triple sums that add up to the target sum


- NOTE: you should NOT return DUPLICATEs of 3 integer sums that add up to the target sum

*/

//First pass solution, "brute force iteration algorithm"
function tripleSumChecker(array,targetSum){
    answerArray =[];
    //Sort the array from smallest to largest
     array.sort((a,b)=> a-b)
    // let myArray = [1,2,3,4,8,9,11,12,13,23,27];

    // we need some kind of looping
    for(let i=0;i<array.length-3; i++){
        for(let j=1; j<array.length-2; j++){
            for(let k=2; k <array.length-1;k++){

                if(array[i]+array[j]+array[k] === targetSum){
                    answerArray.push([array[i],array[j],array[k]]);
                }
            }
        }

    }
    return answerArray;

};
//Problems with this...
//Slow, array.length-2**3 if statement checks!!!!
//lots of unessesary checking
//doing this the dumbest way possible
//Solution sums are in a random order

//Good things about this solution:
//It works
//It was pretty easy to write
//It is easy to read
//Conceptually it makes sense
//We know we checked EVERY combination




//How can we do this logic BETTER?
//With.... 1 loop only
// and 3 pointer variables?

function tripleSumChecker(array,targetSum){
    answerArray =[];
    //Sort the array from smallest to largest
     array.sort((a,b)=> a-b)
    // let myArray = [1,2,3,4,8,9,11,12,13,23,27];

    let leftPointer = 0;
    let rightPointer = array.length-1
    let middlePointer = Math.floor((array.length)/2);

    //Single Loop
        //write the correct control flow logic

    return answerArray;

}