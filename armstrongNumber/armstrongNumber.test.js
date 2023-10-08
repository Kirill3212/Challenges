const armstrongNumber = require("./armstrongNumber");

test("isArmstrongNumber", () => {
  expect(armstrongNumber(153)).toBe(true);
  expect(armstrongNumber(370)).toBe(true);
  expect(armstrongNumber(371)).toBe(true);
  expect(armstrongNumber(407)).toBe(true);
  expect(armstrongNumber(250)).toBe(false);
  expect(armstrongNumber(0)).toBe(true);
  expect(armstrongNumber(333)).toBe(false);
});
