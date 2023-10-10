const cookingTime = require("./boiled-eggs.js");

test("Testing", () => {
  expect(cookingTime(0)).toBe(0);
  expect(cookingTime(8)).toBe(5);
  expect(cookingTime(16)).toBe(10);
  expect(cookingTime(24)).toBe(15);
});
