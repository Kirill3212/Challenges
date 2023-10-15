function incrementString(str) {
  return str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));
}

console.log(incrementString("009"));

// if (typeof +strng == "number" && +strng > 0) {
//   return strng.length > 1
//     ? padWithLeadingZeros(String(Number(strng) + 1), strng.length)
//     : String(Number(strng) + 1);
// }

// let num = strng.match(/\d/g) ? strng.match(/\d/g).join("") : "0";
// let str = strng.match(/\D/g).join("");
// let addedNum = Number(num) + 1;

// function padWithLeadingZeros(num, zeroes) {
//   return (num = String(num).padStart(zeroes, "0"));
// }

// if (num.length > String(addedNum).length) {
//   return str + padWithLeadingZeros(addedNum, num.length);
// } else if (num === "1" && num.length === 1) {
//   return str + addedNum;
// }

// return str + (num !== "1" ? addedNum : "1");
