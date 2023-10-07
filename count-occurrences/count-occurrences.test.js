const countOccurrences = require("./count-occurrences");

test("Checking occurrences", () => {
  expect(countOccurrences("hello", "l")).toBe(2);
  expect(countOccurrences("dictionary", "i")).toBe(2);
  expect(countOccurrences("president", "e")).toBe(2);
});
