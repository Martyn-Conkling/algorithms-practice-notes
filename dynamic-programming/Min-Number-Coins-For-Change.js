//Min Number of Coins for Change

/*
Write a JavaScript Function that answers the following prompt:

Given an array of positive integers representing coin denominations 
and a single non-negative integer 'n' representing a target amount of money, 
write a function that returns the smallest number of coins needed to make change for (to sum up to)
that target amount using the given coin denominations.

Note that you have access to an unlimited amount of coins.  
In other words, if the denominations are [1,5,10], 
you have access to an unlimited amount of 1's 5's and 10's.

If it's impossible to make change for the target amount, return -1.

You are provided a function with the required arguments:

function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
}

Solution Notes:
This is a dynamic programming problem.
The idea is to build up a table numCoins where each entry numCoins[i] represents the minimum number of coins needed to make change for the amount i.
We initialize the table with some large value (larger than any possible number of coins needed) and set the base case numCoins[0] = 0 
since no coins are needed to make change for zero.

For each denomination, we update the table by considering if using that denomination helps us achieve a smaller number of coins for any amount. The function should return numCoins[n], which is the minimum number of coins for the target amount n, or -1 if it's not possible to make change.

*/

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



/*
In this implementation:

The outer loop iterates over each denomination.
The inner loop updates numCoins for every amount from 1 to n.
If the denomination is less than or equal to the current amount, we check if using this denomination results in a smaller number of coins than what we have previously recorded.
Finally, if numCoins[n] is Infinity, it means no combination of the given denominations can sum up to n, so we return -1. Otherwise, we return numCoins[n].


Checking for Optimal Time and Space complexity:
O(nd) time | O(n) space - where n is the target amount and d is the number of coin denominations

This is optimal for medium to large values of n

*/