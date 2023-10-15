function sortArray(array) {
  const odd = array.filter((x) => x % 2);
  let sortedOdd = odd.sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? sortedOdd.shift() : x));
}

console.log(sortArray([5, 8, 6, 3, 4]));
