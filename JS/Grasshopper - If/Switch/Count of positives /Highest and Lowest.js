function highAndLow(numbers) {
  let arrNumbers = numbers.split(" ");
  let result = arrNumbers.map(Number);
  let minValue = Math.min.apply(null, arrNumbers);
  let maxValue = Math.max.apply(null, arrNumbers);
  let minStrin = String(minValue);
  let maxStrin = String(maxValue);
  let a = maxStrin + " " + minStrin;
  return a;
}
