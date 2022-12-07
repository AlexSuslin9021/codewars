function getSize(width, height, depth) {
  let a = 2 * (width * height + height * depth + width * depth);
  let b = width * height * depth;
  return [a, b];
}
