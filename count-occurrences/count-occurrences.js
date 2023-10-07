const countOccurrences = (str, l) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === l) {
      count++;
    }
  }

  return count;
};

// console.log(countOccurrences("helllllo", "l"));

module.exports = countOccurrences;
