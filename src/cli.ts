#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { fibonacciSequence } from "./fibonacci.js";

await yargs(hideBin(process.argv))
  .scriptName("fibonacci-sample")
  .version("0.1.0")
  .command(
    "$0 <n>",
    "Generate a Fibonacci sequence up to the given number of terms.",
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
