import { Writable } from "node:stream";
import { expect, test } from "vitest";
import yargs from "yargs";
import { createGenerateCommand } from "./generate.js";

test("prints the fibonacci sequence to stdout", async () => {
  let output = "";
  const stdout = new Writable({
    write: (chunk: string, _enc, cb) => {
      output += chunk;
      cb();
    },
  });

  const cli = yargs()
    .command(createGenerateCommand({ stdout }))
    .exitProcess(false);

  await cli.parse(["generate", "5"]);

  expect(output).toBe("1 1 2 3 5\n");
});
