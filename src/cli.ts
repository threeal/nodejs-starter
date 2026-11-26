#!/usr/bin/env node

import { createRequire } from "node:module";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { fibonacciSequence } from "./fibonacci.js";

const require = createRequire(import.meta.url);
const { version } = require("../package.json") as { version: string };

await yargs(hideBin(process.argv))
  .scriptName("bonacci")
  .version(version)
  .command(
    "$0 <n>",
    "Generate a Fibonacci sequence up to the given number of terms",
    (y) =>
      y.positional("n", {
        type: "number",
        demandOption: true,
        describe: "The number of terms",
      }),
    (argv) => {
      const sequence = fibonacciSequence(argv.n);
      process.stdout.write(`${sequence.join(" ")}\n`);
    },
  )
  .strict()
  .parse();
