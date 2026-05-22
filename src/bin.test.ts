import { expect, test, vi } from "vitest";

test("prints the fibonacci sequence to stdout", async () => {
  const spy = vi.spyOn(process.stdout, "write").mockReturnValue(true);

  process.argv = ["node", "bin.js", "5"];
  await import("./bin.js");

  expect(spy).toHaveBeenCalledExactlyOnceWith("1 1 2 3 5\n");
});
