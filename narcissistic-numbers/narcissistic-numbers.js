function sumDigPow(a, b) {
  let result = [];

  for (let i = a; i < b; i++) {
    let arr = [...String(i)];
    let num = arr.map((i, inx) => {
      return Math.pow(Number(i), inx + 1);
    });
    let resNum = num.reduce((prev, curr) => {
      return prev + curr;
    });
    if (resNum === i) {
      result.push(i);
    }
  }
  return result;
}

console.log(sumDigPow(10, 100));
console.log(sumDigPow(90, 150));
