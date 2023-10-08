const reverseString = require("./reverse-string");

test("Tesing", () => {
  expect(reverseString("The weather is great!")).toBe("!taerg si rehtaew ehT");
  expect(reverseString("Hello World")).toBe("dlroW olleH");
  expect(reverseString("987654321")).toBe("123456789");
});
