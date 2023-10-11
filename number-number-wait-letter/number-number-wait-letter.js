function doMath(string) {
  let ops = [
    (x, y) => x + y,
    (x, y) => x - y,
    (x, y) => x * y,
    (x, y) => x / y,
  ];
  let i = 0;

  const sortedStrings = string.split(" ").sort((a, b) => {
    if (a.match(/\D/) < b.match(/\D/)) {
      return -1;
    }
    if (a.match(/\D/) > b.match(/\D/)) {
      return 1;
    }
    return 0;
  });

  let numbersOfStrings = sortedStrings.map((n) => n.match(/\d/g));
  let numbers = numbersOfStrings.map((n) => Number(n.join("")));

  let result = numbers.reduce((prev, curr) => ops[i++ % 4](prev, curr));

  return Math.round(result);
}

console.log(doMath("24z6 1x23 y369 89a 900b"));
