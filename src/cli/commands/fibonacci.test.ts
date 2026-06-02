import { Cli } from "clipanion";
import { PassThrough } from "node:stream";
import { expect, test } from "vitest";
import { FibonacciCommand } from "./fibonacci.js";

test("prints the fibonacci sequence to stdout", async () => {
  const cli = new Cli();
  cli.register(FibonacciCommand);

  const stdout = new PassThrough();
  await cli.run(["5"], { stdout });

  expect((stdout.read() as Buffer).toString()).toBe("1 1 2 3 5\n");
});
