const calculator = require("./calculator");

test("Performing arithmetic operations using the calculator function", () => {
  // Addition
  const resultA1 = calculator(2, 2, "+");
  const resultA2 = calculator(3, 3, "+");
  const resultA3 = calculator(100, 100, "+");

  expect(resultA1).toBe(4);
  expect(resultA2).toBe(6);
  expect(resultA3).toBe(200);

  // Substraction
  const resultS1 = calculator(5, 2, "-");
  const resultS2 = calculator(10, 3, "-");
  const resultS3 = calculator(100, 50, "-");

  expect(resultS1).toBe(3);
  expect(resultS2).toBe(7);
  expect(resultS3).toBe(50);

  // Multiplication
  const resultM1 = calculator(5, 2, "*");
  const resultM2 = calculator(10, 3, "*");
  const resultM3 = calculator(100, 50, "*");

  expect(resultM1).toBe(10);
  expect(resultM2).toBe(30);
  expect(resultM3).toBe(5000);

  // Division
  const resultD1 = calculator(4, 2, "/");
  const resultD2 = calculator(15, 3, "/");
  const resulutD3 = calculator(12, 7, "/");

  expect(resultD1).toBe(2);
  expect(resultD2).toBe(5);
  expect(resulutD3).toBeCloseTo(1.71);
});
