const largestProduct = require("./largestProduct");
const largeGridTest = require("./finalGrid");

describe("largestProduct tests", () => {
  test("should return a number", () => {
    expect(largestProduct([])).toBe(0);
    expect(typeof largestProduct([])).toBe("number");
  });
  test("should return the total for an array grid which is only 1 row of 4 numbers (right direction)", () => {
    const input = [[99, 99, 99, 99]];
    const totalProduct = 99 * 99 * 99 * 99;
    expect(largestProduct(input)).toBe(totalProduct);
  });
  test("should return the total for an array grid which is only 1 column down of 4 numbers (down direction)", () => {
    const input = [[99], [99], [99], [99]];
    const totalProduct = 99 * 99 * 99 * 99;
    expect(largestProduct(input)).toBe(totalProduct);
  });
  test("should return the largest product of a 4x4 grid of 4 adjacent numbers (diagonal left direction)", () => {
    const input = [
      [23, 20, 20, 99],
      [22, 76, 99, 22],
      [31, 99, 32, 45],
      [98, 22, 34, 10],
    ];
    const totalProduct = 99 * 99 * 99 * 98;
    expect(largestProduct(input)).toBe(totalProduct);
  });
  test("should return the largest product of a 6x6 grid of 4 adjacent numbers (diagonal right direction)", () => {
    const input = [
      [43, 20, 20, 22, 99, 44],
      [22, 32, 45, 99, 22, 54],
      [31, 68, 99, 45, 33, 67],
      [32, 22, 34, 98, 44, 21],
      [23, 45, 77, 43, 98, 11],
      [11, 22, 33, 44, 55, 99],
    ];
    const totalProduct = 99 * 98 * 98 * 99;
    expect(largestProduct(input)).toBe(totalProduct);
  });
  test("should return the largest product of a 20x20 grid of 4 adjacent numbers (diagonal right direction)", () => {
    const totalProduct = 99 * 98 * 97 * 96;
    expect(largestProduct(largeGridTest)).toBe(totalProduct);
  });
});
