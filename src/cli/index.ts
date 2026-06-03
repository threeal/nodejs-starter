#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { createGenerateCommand } from "./commands/generate.js";

await yargs(hideBin(process.argv))
  .scriptName("fibonacci-sample")
  .version("0.0.0")
  .command(createGenerateCommand({ stdout: process.stdout }))
  .demandCommand()
  .strict()
  .parse();
