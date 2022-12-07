// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
  let a = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[1] !== numbers[i]) {
      a = numbers[i];
    }
  }
  return a;
}