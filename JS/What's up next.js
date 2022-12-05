// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

// When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

function nextItem(xs, item) {
  array = xs[Symbol.iterator]();
  for (let el of array) {
    if (el === item) return array.next().value;
  }
}
