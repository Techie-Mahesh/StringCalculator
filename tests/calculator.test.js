const StringCalculator = require("../src/calculator");

describe("String Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("should return the sum of two comma-seperated numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("should return the sum of multiple comma-seperated numbers", () => {
    expect(calculator.add("1,2,3")).toBe(6);
  });
});
