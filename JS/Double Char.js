// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str) {
  let a = str.split("");
  return a.map((s) => s.repeat(2)).join("");
}
