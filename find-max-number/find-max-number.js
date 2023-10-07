const findMaxNumber = (arr) => {
  return arr.sort((a, b) => a - b)[arr.length - 1];
};

console.log(findMaxNumber([1, 2, 3, 4, 5, 14, 45, 89, 10, 9, 8, 7, 6]));

module.exports = findMaxNumber;
