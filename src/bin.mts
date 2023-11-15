#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { fibonacciSequence } from "./sequence.mjs";

yargs(hideBin(process.argv))
  .scriptName("starter")
  .version("0.1.0")
  .command(
    "$0 <n>",
    "Generate a Fibonacci sequence up to the given number of terms.",
    (yargs) =>
      yargs.positional("n", {
        demandOption: true,
        describe: "The number of terms",
        type: "number",
      }),
    (argv) => {
      process.stdout.write(fibonacciSequence(argv.n).join(" ") + "\n");
    },
  )
  .parse();
