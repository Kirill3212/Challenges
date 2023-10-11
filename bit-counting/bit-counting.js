var countBits = function (n) {
  return n
    .toString(2)
    .split("")
    .filter((n) => Number(n) !== 0).length;
};

console.log(countBits(4));
