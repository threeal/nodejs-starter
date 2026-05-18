#!/usr/bin/env node

import cac from "cac";
import { fibonacciSequence } from "./lib.js";

const cli = cac("my_fibonacci");

cli
  .command(
    "<n>",
    "Generate a Fibonacci sequence up to the given number of terms.",
  )
  .action((n: string) => {
    const sequence = fibonacciSequence(parseInt(n));
    process.stdout.write(`${sequence.join(" ")}\n`);
  });

cli.version("0.0.0");
cli.help();
cli.parse();
