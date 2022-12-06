// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  let ar = [];
  x.forEach((el) => {
    ar.push(el * 2);
  });
  return ar;
}
