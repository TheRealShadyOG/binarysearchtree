// Factory for node containing data, right/left children
const node = (data, right, left) => {
  return {
    data: data || null,
    rightChildren: right || null,
    leftChildren: left || null,
  };
};

// Factory for tree, accepts array when initialized
const tree = (array) => {
  // Sort and remove duplicates from array
  let newArray = prepArray(array);

  return buildTree(newArray, 0, newArray.length - 1);
};

// Function for building tree
function buildTree(array, start, end) {
  // Exit statement
  if (start > end) {
    return null;
  }

  // Find middle of array
  let mid = Math.floor((start + end) / 2);

  // Middle of array is current node
  let currentNode = node(array[mid]);

  // Recursively find left of node
  currentNode.leftChildren = buildTree(array, start, mid - 1);

  // Recursively find right of node
  currentNode.rightChildren = buildTree(array, mid + 1, end);

  // Return node
  return currentNode;
}

// Function to sort and remove duplicates
function prepArray(array) {
  // Sort given array
  array.sort(function (a, b) {
    return a - b;
  });

  // Remove any duplicates
  array = array.filter((value, index) => array.indexOf(value) === index);

  // Return array sorted w/ duplicates removed
  return array;
}

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// Function to insert value
function insert(value, tree) {
  // Current postion
  let current = tree;
  // Exit Statement
  if (current === null) {
    current = node(value);
    return current;
  }

  // If value is less than current move to left of current
  if (value < current.data) {
    current.leftChildren = insert(value, current.leftChildren);
    // If value is greater than current move to right of current
  } else if (value > current.data) {
    current.rightChildren = insert(value, current.rightChildren);
  }

  // Return tree
  return tree;
}

// Function to display BST in console
// Provided by online course I did not write this
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rightChildren !== null) {
    prettyPrint(
      node.rightChildren,
      `${prefix}${isLeft ? '│   ' : '    '}`,
      false
    );
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.leftChildren !== null) {
    prettyPrint(
      node.leftChildren,
      `${prefix}${isLeft ? '    ' : '│   '}`,
      true
    );
  }
};
