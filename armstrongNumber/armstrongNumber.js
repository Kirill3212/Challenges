const armstrongNumber = (num) => {
  const str = "" + num;
  const result = [...str]
    .map(Number)
    .map((n) => Math.pow(n, str.length))
    .reduce((a, n) => a + n);
  return result === num ? true : false;
};

module.exports = armstrongNumber;
