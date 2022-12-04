// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
  let as = 0;
  let bs = 0;
  a.forEach((el) => {
    as += el ** 2;
  });
  b.forEach((el) => {
    bs += el ** 3;
  });
  if (as > bs) {
    return true;
  } else {
    return false;
  }
}
