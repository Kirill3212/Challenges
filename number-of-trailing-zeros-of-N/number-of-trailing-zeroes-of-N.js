function zeros(n) {
  let divider = 1;
  let sum = 0;

  while (divider <= n) {
    sum = Math.floor(sum + n / (divider *= 5));
  }
  return sum;
}

console.log(zeros(1000));

// let divider = 1;
// let sum = 0;

// while (divider <= n) {
//   sum = Math.floor(sum + n / (divider *= 5));
// }
// return sum;

// let result = "";
// let bigCycle = 0;

// for (let i = 0; i <= n; i += 5, bigCycle++) {
//   if (bigCycle == 5 && i > 4) {
//     result += "00";
//     bigCycle = 0;
//   } else if (i > 4) {
//     result += "0";
//   }
// }

// return result.length;
