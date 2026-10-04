/**
 * Generates a Fibonacci sequence up to the given number of terms.
 *
 * The sequence starts from `1, 1`, and exactly `n` terms are returned, so an
 * `n` of 0 yields an empty sequence.
 * @param n - The number of terms.
 * @returns A Fibonacci sequence.
 */
export function fibonacciSequence(n: number): number[] {
  const sequence = new Array<number>(n).fill(1);
  for (let i = 2; i < n; ++i) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
  }
  return sequence;
}
