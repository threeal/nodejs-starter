import { expect, test } from "vitest";
import { fibonacciSequence } from "./lib.js";

test("returns a fibonacci sequence of the given length", () => {
  expect(fibonacciSequence(1)).toStrictEqual([1]);
  expect(fibonacciSequence(2)).toStrictEqual([1, 1]);
  expect(fibonacciSequence(5)).toStrictEqual([1, 1, 2, 3, 5]);
});
