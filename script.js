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
  return {
    root: buildTree(array),
  };
};

// Function for building tree
function buildTree(array) {
  prepArray(array);
  return 'works';
}

// Function to sort and remove duplicates
function prepArray(array) {
  // Sort given array
  array.sort(function (a, b) {
    return a - b;
  });
  console.log(array);

  // Remove any duplicates
  array = array.filter((value, index) => array.indexOf(value) === index);
  console.log(array);
}

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
