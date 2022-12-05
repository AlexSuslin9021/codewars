// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
  let arr = [];
  array.forEach((el) => {
    if (Number.isInteger(Math.sqrt(el))) {
      arr.push(Math.sqrt(el));
    } else {
      arr.push(el ** 2);
    }
  });
  return arr;
}
