#!/usr/bin/env node

import { fibonacciSequence } from "./sequence.mjs";

const n = Number.parseInt(process.argv[2]);
const sequence = fibonacciSequence(n);
process.stdout.write(sequence.join(" "));
