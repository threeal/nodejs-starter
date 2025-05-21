#!/usr/bin/env node

import { program } from "commander";
import { fibonacciSequence } from "./lib.js";

program
  .name("my_fibonacci")
  .version("0.0.0")
  .description("Generate a Fibonacci sequence up to the given number of terms.")
  .argument("<n>", "The number of terms", parseInt)
  .action((n) => {
    const sequence = fibonacciSequence(n);
    process.stdout.write(`${sequence.join(" ")}\n`);
  })
  .parse();
