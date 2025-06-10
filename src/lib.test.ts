import { expect, it } from "vitest";
import { fibonacciSequence } from "./lib.js";

it("should generate a fibonacci sequence", () => {
  expect(fibonacciSequence(1)).toStrictEqual([1]);
  expect(fibonacciSequence(2)).toStrictEqual([1, 1]);
  expect(fibonacciSequence(5)).toStrictEqual([1, 1, 2, 3, 5]);
});
