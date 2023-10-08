const titleCase = require("./title-case");

test("Testing", () => {
  expect(titleCase("sHoRt AnD sToUt")).toBe("Short And Stout");
  expect(titleCase("hello world")).toBe("Hello World");
  expect(
    titleCase(
      "Logic will get you from A to Z; imagination will get you everywhere"
    )
  ).toBe("Logic Will Get You From A To Z; Imagination Will Get You Everywhere");
});
