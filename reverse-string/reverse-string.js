function reverseString(str) {
  //   return [...str].reverse().join("");

  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

module.exports = reverseString;
