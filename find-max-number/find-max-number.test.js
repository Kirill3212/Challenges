const findMaxNumber = require("./find-max-number");

test("testing for max number", () => {
  expect(findMaxNumber([3, 14, 11, 8])).toBe(14);
  expect(findMaxNumber([111, 222, 11, 22, 1, 333])).toBe(333);
  expect(findMaxNumber([1000, 13, 11, 2, 1, 76])).toBe(1000);
  expect(findMaxNumber([1313, 2, 777, 123, 1, 890])).toBe(1313);
});
