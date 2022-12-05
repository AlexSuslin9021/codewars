// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

function multiply(number) {
  let a = Math.abs(number).toString().length;
  return number * 5 ** a;
}
