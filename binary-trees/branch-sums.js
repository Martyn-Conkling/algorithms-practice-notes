/*
Algorithm question:
Write a function in JavaScript that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.  
A branch sum is the sum of all values in a binary tree branch. 
A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node. 
Each BinaryTree node has an integer value, a left child node, and a right child node.  
Children nodes can either be BinaryTree nodes themselves or None/null.  
*/

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
      const sums = [];
  
    function calculateBranchSums(node, runningSum) {
      if (node === null) {
        return;
      }
  
      const newRunningSum = runningSum + node.value;
  
      // If we're at a leaf node, add the sum to the list
      if (node.left === null && node.right === null) {
        sums.push(newRunningSum);
        return;
      }
  
      // Continue the traversal on the left and right children
      calculateBranchSums(node.left, newRunningSum);
      calculateBranchSums(node.right, newRunningSum);
    }
  
    calculateBranchSums(root, 0);
    return sums;
  
  }