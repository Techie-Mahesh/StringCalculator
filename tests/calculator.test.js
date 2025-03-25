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

  test("should return the sum of multiple comma and newline-seperated numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("should return the sum of multiple numbers with a custom delimiter", () => {
    expect(calculator.add("//;\n1;2;4")).toBe(7);
  });

  test("should return the sum of multiple numbers with a custom delimiter", () => {
    expect(calculator.add("//&\n3&2&4")).toBe(9);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => calculator.add("-1,2,-3")).toThrowError(
      "Negative numbers not allowed: -1, -3"
    );
  });
});
