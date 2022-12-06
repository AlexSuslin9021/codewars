// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  let ar = [];
  array.forEach((el) => {
    ar.push(el * -1);
  });
  return ar;
}
