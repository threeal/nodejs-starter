import { describe, expect, test } from "vitest";
import { fibonacciSequence } from "./fibonacci.js";

describe("fibonacciSequence", () => {
  test("generates a Fibonacci sequence", () => {
    expect(fibonacciSequence(0)).toStrictEqual([]);
    expect(fibonacciSequence(1)).toStrictEqual([1]);
    expect(fibonacciSequence(2)).toStrictEqual([1, 1]);
    expect(fibonacciSequence(5)).toStrictEqual([1, 1, 2, 3, 5]);
  });
});
