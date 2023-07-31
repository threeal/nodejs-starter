import { expect, it } from "@jest/globals";
import { isOdd, isEven } from "./";

it("should be odd", () => {
  const val = 5;
  expect(isOdd(val)).toBe(true);
  expect(isEven(val)).toBe(false);
});

it("should be even", () => {
  const val = 6;
  expect(isOdd(val)).toBe(false);
  expect(isEven(val)).toBe(true);
});
