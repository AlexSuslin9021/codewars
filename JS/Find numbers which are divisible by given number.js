// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor) {
  let ar = [];
  numbers.forEach((el) => {
    if (el % divisor === 0) {
      ar.push(el);
    }
  });
  return ar;
}
