// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  let ar = [];
  if (a < b) {
    for (let i = a; b >= i; i++) {
      ar.push(i);
    }
  }
  return ar;
}
