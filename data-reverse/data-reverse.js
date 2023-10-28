function dataReverse(data) {
  return new Array(data.length / 8)
    .fill("")
    .map((_, i) => data.slice(i * 8, (i + 1) * 8))
    .reverse()
    .flat();
}

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
);
