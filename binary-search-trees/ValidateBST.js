class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

function validateBst(tree) {
    return validateBstHelper(tree, -Infinity, Infinity);
}
  
function validateBstHelper(node, minValue, maxValue) {
    if (node === null) {
      return true;
    }
    if (node.value < minValue || node.value >= maxValue) {
      return false;
    }
    const leftIsValid = validateBstHelper(node.left, minValue, node.value);
    return leftIsValid && validateBstHelper(node.right, node.value, maxValue);
}
  