function digPow(n, p) {
  let digitSum = 0;
  let strNum = String(n);
  for (let i in strNum) {
    console.log(strNum[i]);
    digitSum += strNum[i] ** p;
    p++;
  }
  return Number.isInteger(digitSum / n) ? digitSum / n : -1;
}

console.log(digPow(89, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));
