#!/usr/bin/env node

import { program } from "commander";
import { fibonacciSequence } from "./sequence.js";

program
  .name("my_fibonacci")
  .version("0.0.0")
  .description("Generate a Fibonacci sequence up to the given number of terms.")
  .argument("<n>", "The number of terms", parseInt)
  .parse();

const [n] = program.processedArgs;
process.stdout.write(`${fibonacciSequence(n).join(" ")}\n`);
