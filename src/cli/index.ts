#!/usr/bin/env node

import { Cli } from "clipanion";
import { FibonacciCommand } from "./commands/fibonacci.js";

const cli = new Cli({
  binaryLabel: "fibonacci-sample",
  binaryVersion: "0.1.0",
});

cli.register(FibonacciCommand);
void cli.runExit(process.argv.slice(2));
