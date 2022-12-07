function repeatStr(n, s) {
  let a = "";
  while (n > 0) {
    a = a + s;
    n--;
  }
  return a;
}
