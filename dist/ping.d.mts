/**
 * Pings the localhost endpoint to check if it is alive.
 *
 * @returns A Promise that resolves to `true` if the localhost is alive, otherwise `false`.
 * @example
 * ```js
 * const isAlive = await pingLocalhost();
 * // Output: true (if localhost is reachable)
 * ```
 */
export declare function pingLocalhost(): Promise<boolean>;
